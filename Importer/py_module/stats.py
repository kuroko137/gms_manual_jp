import os
import sys
import re
import datetime

NOTIFICATION_BY_WORD = False # 通知における進捗率をワード数から算出するかどうか
DAYS_MERGIN = 365 # グラフ用の空項目を何日先に作成するか

def write_update_stats(log_dir, ver, infos, files):
    lines = []
    header = 'time\tver\tlines\ttr_lines\tpct_lines\twords\ttr_words\tpct_words\tadd_lines\tadd_pct_lines\tadd_words\tadd_pct_words'
    old_ver = 0

    # ログから前の統計を取得
    latest_path = os.path.join(log_dir, 'discord_latest_notice.log')
    log_path = os.path.join(log_dir, 'update_stats.csv')
    log_lines = []
    files_log_path = os.path.join(log_dir, 'update_stats_files.csv')
    log_graph_path = os.path.join(log_dir, 'update_stats_graph.log')

    if os.path.exists(log_path):
        with open(log_path, "r") as f:
            log_lines = f.read().splitlines(False)[1:]
        if log_lines:
            old_ver = int(log_lines[0].split('\t')[1])

    # ログに統計を書き込み
    total_lines = infos[0]
    total_words = infos[3]
    tr_lines = infos[1]
    tr_words = infos[4]
    add_lines = '{:,}'.format(infos[2])
    add_words = '{:,}'.format(infos[5])

    total_pct_lines = '{:.3f}'.format((infos[1] / infos[0]) * 100)
    total_pct_words = '{:.3f}'.format((infos[4] / infos[3]) * 100)
    add_pct_lines = '{:.3f}'.format((infos[2] / infos[0]) * 100)
    add_pct_words = '{:.3f}'.format((infos[5] / infos[3]) * 100)

    dt = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9)))
    time = dt.strftime('%Y/%m/%d %H:%M:%S')

    if infos[2] > 0:
        line = '{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}\t{8}\t{9}\t{10}\t{11}'.format(time, ver, total_lines, tr_lines, total_pct_lines, total_words, tr_words, total_pct_words, add_lines, add_pct_lines, add_words, add_pct_words)
    else:
        line = '{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}'.format(time, ver, total_lines, tr_lines, total_pct_lines, total_words, tr_words, total_pct_words)

    files = list(dict.fromkeys(files)) # 重複行を削除

    file_log_lines = []

    if len(files) > 0:
        lines.insert(0, line)
        lines.insert(0, header)
        lines = lines + log_lines

        with open(log_path, "w+") as f: # ログに統計を書き込み
            f.write('\n'.join(lines))

        str_files = '\t'.join(files)
        str_files = str_files.strip('\t')
        str_files = time + '\t' + str_files

        if os.path.exists(files_log_path):
            with open(files_log_path, "r") as f:
                file_log_lines = f.read().splitlines(False)

        file_log_lines.insert(0, str_files)

        with open(files_log_path, "w+") as f: # ログに更新ファイル名を書き込み
            f.write('\n'.join(file_log_lines))


    # ------------------------------------
    # グラフ用のCSVを出力
    if len(files) > 0:

        lines_dict = {}
        old_header = ''

        for line in reversed(lines):
            line = re.sub(r'(^[^ ]+) [0-9:]+', r'\1', line) # 時刻を日数のみに置換
            header = line.split('\t')[0]

            if header != old_header:
                stats = [0, 0.0, 0, 0.0]
            
            s = line.split('\t')
            if len(s) < (len(stats) + 8):
                s += ['0'] * len(stats)

            # 同じ日の追加翻訳数を合算
            for idx in range(len(stats)):
                adds = idx + 8 # 追加翻訳数の開始インデックス

                if not s[adds].replace('.', '', 1).isdigit():
                    break # 数字でないため中断

                if isinstance(stats[idx], float): # 小数点
                    formatted_var = float(s[adds])
                    stats[idx] += formatted_var
                    stats[idx] = round(stats[idx], 3)
                else:
                    formatted_var = int(s[adds])
                    stats[idx] += formatted_var

                s[adds] = str(stats[idx])

            line = '\t'.join(s)
            lines_dict[header] = line
            old_header = header

        lines_dict = sorted(lines_dict.items(), reverse=True)
        graph_lines = [line[1] for line in lines_dict]


        if DAYS_MERGIN > 0:
            dt_max = dt + datetime.timedelta(days=DAYS_MERGIN)
        else:
            dt_max = dt + datetime.timedelta(days=1)
        line_max_time = dt_max.strftime('%Y/%m/%d')
        graph_lines.insert(1, line_max_time)


        with open(log_graph_path, "w+") as f: # ログに更新ファイル名を書き込み
            f.write('\n'.join(graph_lines))


    # ------------------------------------
    # Discordへの通知メッセージを環境変数にセット

    # 通知インターバルのチェック
    WEBHOOK = os.environ.get("DISCORD_WEBHOOK")
    WEBHOOK_ID = os.environ.get("DISCORD_WEBHOOK_ID")

    if WEBHOOK == None or WEBHOOK == '' or WEBHOOK_ID == None or WEBHOOK_ID == '':
        print('WEBHOOK or WEBHOOK_ID is not registered in secrets. Cancel notification.')
        return

    NOTIFICATION_SKIP = False
    if log_lines:

        interval = os.environ.get("DISCORD_INTERVAL")
        if interval != None and interval != '':
            interval = int(interval)
            if interval < 0:
                interval = 0
            else:
                interval = interval * 3600
        else:
            interval = 0

        interval_play = 1800 # Actionの実行時間がずれた場合のために30分の猶予時間を設ける

        cs = [int(d) for d in re.split(r'[/ :]', time)]
        cd = datetime.datetime(cs[0], cs[1], cs[2], cs[3], cs[4])

        if os.path.exists(latest_path):
            with open(latest_path) as f:
                latest_line = f.readline()

            ls = [int(d) for d in re.split(r'[/ :]', latest_line)]
            ld = datetime.datetime(ls[0], ls[1], ls[2], ls[3], ls[4])

            if cd < (ld + datetime.timedelta(seconds=(interval - interval_play))): # 現在時間がインターバル未満
                print('NOTIFICATION_SKIP: The interval is not over')
                NOTIFICATION_SKIP = True

            if interval == 0 and len(files) == 0:
                NOTIFICATION_SKIP = True
                print('NOTIFICATION_SKIP: No file found')

            if interval > 0 and NOTIFICATION_SKIP == False:

                i = 0
                for line in log_lines: # インターバル間までの統計をメッセージに加算
                    s = line.replace(',', '').split('\t')
                    ps = [int(d) for d in re.split(r'[/ :]', s[0])]
                    nd = datetime.datetime(ps[0], ps[1], ps[2], ps[3], ps[4])

                    if nd <= ld or nd < (cd - datetime.timedelta(seconds=interval)):
                        break

                    i += 1

                    if len(s) > 9:
                        infos[2] += int(s[8]) # 行数（追加）
                        infos[5] += int(s[10]) # ワード数（追加）

                    pre_files = [line for line in file_log_lines if line.startswith(s[0])]
                    if pre_files:
                        files += pre_files[0].split('\t')[1:]

                if i == 0 and len(files) == 0:
                    NOTIFICATION_SKIP = True
                    print('NOTIFICATION_SKIP: No file found for DETAILS.')
                else:
                    add_lines = '{:,}'.format(infos[2])
                    add_words = '{:,}'.format(infos[5])

                    total_pct = '{:.3f}'.format((infos[1] / infos[0]) * 100)
                    add_pct = '{:.3f}'.format((infos[2] / infos[0]) * 100)

    if NOTIFICATION_SKIP:
        return

    files = list(dict.fromkeys(files))
    
    DETAILS = os.environ.get("DISCORD_DETAILS")
    if DETAILS == None or DETAILS == '' or DETAILS.lower() == 'false':
        DETAILS = False
    else:
        if len(files) == 0:
            return
        DETAILS = True

    # 通知フラグファイルを作成
    with open(latest_path, "w+") as f:
        f.write(time)

    notify_file = '_DISCORD_NOTIFICATION'
    with open(notify_file, "w+") as f:
        f.write(notify_file)

    # 通知メッセージを設定
    if NOTIFICATION_BY_WORD:
        disc_total_pct = total_pct_words
        disc_add_pct = add_pct_words
    else:
        disc_total_pct = total_pct_lines
        disc_add_pct = add_pct_lines

    if old_ver > 0 and ver > old_ver:
        message = 'notify_message={0} - 日本語化率: {1}% (バージョン {2} > {3}\n'.format(time, disc_total_pct, old_ver, ver)
    elif infos[2] > 0:
        message = 'notify_message={0} - 日本語化率: {1}% (+{2}%, {3} 行, {4} 語)\n'.format(time, disc_total_pct, disc_add_pct, add_lines, add_words)
    else:
        message = 'notify_message={0} - 日本語化率: {1}% (変更のみ)\n'.format(time, disc_total_pct)

    msg_path = '_ENV_NOTIFY_MESSAGE'
    with open(msg_path, "w+", encoding='utf_8') as f: # 環境変数に代入できなくなるためBOM無しで出力する
        f.write(message)

    # 変更されたファイルの名前を通知
    if DETAILS:
        detail_path = '_ENV_NOTIFY_DETAILS'
        str_files = ''

        files = [re.sub(r'.*／', r'', file) for file in files]
        files = [file for file in files if file != '']

        for idx, file in enumerate(files):
            if idx >= 10: # 10ファイル以上は省略
                break
            str_files += file + ', '
        str_files = str_files.strip(', ')
        if len(files) > 10:
            str_files += '...'

        message = 'notify_details=更新ファイル: {0}\n'.format(str_files)
        with open(detail_path, "w+", encoding='utf_8') as f:
            f.write(message)

    return
