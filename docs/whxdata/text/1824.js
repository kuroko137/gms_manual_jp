rh._.exports({"0":["md5_string_utf8","md5_string_utf8"],"1":["md5_string_utf8"],"2":["md5_string_utf8"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","md5_string_utf8","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","In cryptography, MD5 (Message-Digest algorithm 5) is a widely used cryptographic hash function with a 128-bit hash value and has been employed in a wide variety of security applications. It is also commonly used to check the integrity of files and strings.\n    This function will take an input UTF-8 string (which has a variable number of bytes per character) and return the 32-character hexadecimal MD5 hash that is unique to that string. In this way you can generate a secure key which can be stored and used\n    to check the integrity of the information being sent to (or received from) an external server (for example).","\n  ","NOTE",": There are two formats for the MD5 encoding, UTF-8 and unicode. Both are provided to facilitate communication with different server setups, but the most common to use is unicode.","\n  "," ","\n  ","\n  ","md5_string_utf8(string)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","The string to hash.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var hash, str;"," str = json_encode(hiscore_map);"," hash = md5_string_utf8(str);"," ini_open(\"local.ini\");\n    "," ini_write_string(\"info\", \"0\", hash);"," ini_close();\n    "," get[0] = http_post_string(\"http://www.MacSweeney Games.com/CatchTheHaggis?game_hiscores=\" + string(global.game_id), str)","\n  ","The above code will encode a DS map into a JSON string. An MD5 hash is then generated and stored in an ini file so that this can later be used to check the integrity of the JSON should the same information be received later form the server. The JSON\n    is then sent.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Encoding","\n        ","Next: ","md5_string_unicode","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["md5_string_utf8"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1824"})