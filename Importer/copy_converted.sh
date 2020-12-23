#!/bin/bash

if [ -e _DISCORD_NOTIFICATION ]; then
  echo "discord_send_state=green" > _ENV_DISCORD_SEND_STATE
fi

if [ ! -e _COMMIT_RUN ]; then
  # 変更が見つからないため処理を中断
  echo "action_state=yellow" > _ENV_ACTION_STATE
  echo 'NO CHANGES FOUND. The process was aborted.'
  exit
fi

if [ ! -e _VERSION ]; then
  echo "action_state=yellow" > _ENV_ACTION_STATE
  echo '_VERSION cannot be found. The process was aborted.'
  exit
fi

BASE_VER=`cat _VERSION`
RELEASE_VAR=`echo ${BASE_VER} | sed -e "s/^\([0-9]\+\)\([0-9]\)\([0-9]\)/\1.\2.\3/"`
FOUND_TAG=0

echo "BASE_VER = ${BASE_VER}"

LIST=`git ls-remote --tags`

for LINE in $LIST
do
    if expr "${LINE}" : "refs/tags/${BASE_VER}" > /dev/null; then
      echo "var_matched! = ${BASE_VER} : ${LINE}"
      FOUND_TAG=1
      break
    fi
done

if [ $FOUND_TAG -eq 0 ]; then
  git tag $BASE_VER
  git push origin --tags
  echo "TAG PUSH!"
fi

echo "release_tag=${BASE_VER}" > _ENV_TAG
echo "release_ver=${RELEASE_VAR}" > _ENV_VER


if [ ! -e ./generated ]; then
  mkdir -p ./generated
fi

if [ -e ./Preview ]; then # 容量の大きいjsファイルはリリースのみに反映させるためいったん退避
  mkdir -p ./docs_db_saver/whxdata/text
  mv ./docs/whxdata/search_db.js ./docs_db_saver/whxdata/search_db.js
  mv ./docs/whxdata/search_auto_map_0.js ./docs_db_saver/whxdata/search_auto_map_0.js
  mv ./docs/whxdata/search_auto_model_0.js ./docs_db_saver/whxdata/search_auto_model_0.js
  mv ./docs/whxdata/search_topics.js ./docs_db_saver/whxdata/search_topics.js
  mv ./docs/whxdata/text ./docs_db_saver/whxdata
fi

cp ./Converted/* ./generated -arf
cp generated/manual/docs ./ -arf
rm -rf generated/manual/docs
rm -rf generated/manual/cnv_csv
rm -rf generated/manual/cnv_po

GENERATE_EX=0

if [ -r ./_VERSION ]; then
  BASE_VER=`cat _VERSION`
  echo BASE_VER=$BASE_VER
  
  if [ -r ./override/_VERSION ]; then

    OVERRIDE_VER=`cat override/_VERSION`
    echo OVERRIDE_VER=$OVERRIDE_VER
  
    if [ $OVERRIDE_VER -ge $BASE_VER ]; then
      cp ./override/docs ./ -arf
      find ./docs -name 'git_noadd_*' | xargs rm
    else
      echo OVERRIDE is OUTDATED. No override is done.
    fi
  fi

  if [ -r ./override_extra/_VERSION -a -e ./Converted_EX ]; then

    OVERRIDE_VER=`cat override_extra/_VERSION`
    echo OVERRIDE_EX_VER=$OVERRIDE_VER
  
    if [ $OVERRIDE_VER -ge $BASE_VER ]; then
      mkdir -p ./ex_tmp
      cp ./Converted_EX/manual/docs ./ex_tmp/docs -arf
      cp ./override_extra/docs ./ex_tmp -arf # 連続で同じ場所にコピーするとコピー先が変化するため直下にコピー
      find ./ex_tmp -name 'git_noadd_*' | xargs rm
      GENERATE_EX=1
    else
      echo OVERRIDE_EXTRA is OUTDATED. No override is done.
    fi
  fi
fi


shopt -s dotglob

cp ./docs ./Release -arf
find ./Release/docs -name "*.gitkeep" -or -name "*.gitattributes" -or -name "*.nojekyll" | xargs rm
mv ./Release/docs ./Release/GMS2-Robohelp-ja -f
cd Release/GMS2-Robohelp-ja
zip -r ../GMS2-Robohelp-ja.zip ./
cd ../../
rm -rf ./Release/GMS2-Robohelp-ja

echo "action_state=green" > _ENV_ACTION_STATE


if [ $GENERATE_EX -eq 1 ]; then
  cp ./docs ./Release -arf
  cp ./ex_tmp/docs ./Release -arf
  find ./Release/docs -name "*.gitkeep" -or -name "*.gitattributes" -or -name "*.nojekyll" | xargs rm
  mv ./Release/docs ./Release/GMS2-Robohelp-ja -f
  cd Release/GMS2-Robohelp-ja
  zip -r ../GMS2-Robohelp-ja-alt.zip ./
  cd ../../
  rm -rf ./Release/GMS2-Robohelp-ja
fi

shopt -u dotglob


cd Release

mkdir -p ./IDE_Debug
mv *_debug*.csv ./IDE_Debug
if [ -n "$(ls -A ./IDE_Debug)" ]; then
  cd IDE_Debug
  zip -r ../IDE_Debug.zip ./
  cd ../
fi
rm -rf ./IDE_Debug

mkdir -p ./IDE_Japanese_Alt
mv *_alt*.csv ./IDE_Japanese_Alt
if [ -n "$(ls -A ./IDE_Japanese_Alt)" ]; then
  cd IDE_Japanese_Alt
  zip -r ../IDE_Japanese_Alt.zip ./
  cd ../
fi
rm -rf ./IDE_Japanese_Alt

mkdir -p ./IDE_Japanese
mv *.csv ./IDE_Japanese
if [ -n "$(ls -A ./IDE_Japanese)" ]; then
  cd IDE_Japanese
  zip -r ../IDE_Japanese.zip ./
  cd ../
fi
rm -rf ./IDE_Japanese

cd ../


if [ -e ./Preview ]; then
  cp ./docs_db_saver/whxdata/* ./docs/whxdata -arf
  rm -rf ./docs_db_saver
  cp ./Preview/* ./docs -arf
fi
