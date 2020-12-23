rh._.exports({"0":["sha1_string_utf8","sha1_string_utf8"],"1":["sha1_string_utf8"],"2":["sha1_string_utf8"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","sha1_string_utf8","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","In cryptography, SHA-1 is a cryptographic hash function designed by the United States ","National Security Agency"," and is employed in several widely used applications and protocols like the popular ","Git"," where it is used to check for file changes.\n    This function will take an input UTF-8 string (which has a variable number of bytes per character) and returns a 160 bit message digest in ASCII format, for example:","\n  ","sha1 input string = \"The quick brown fox jumps over the lazy dog\""," sha1 output hash = \"2fd4e1c6 7a2d28fc ed849ee1 bb76e739 1b93eb12\"","\n  ","In this way you can generate a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example).","\n  ","NOTE",": There are two formats for the sha1 encoding, UTF-8 and unicode. Both are provided to facilitate communication with different server setups, but the most common to use is unicode.","\n  "," ","\n  ","\n  ","sha1_string_utf8(string)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","The string to hash.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var hash, str;"," str = json_encode(hiscore_map);"," hash = sha1_string_utf8(str);"," ini_open(\"local.ini\");\n    "," ini_write_string(\"info\", \"0\", hash);"," ini_close();\n    "," get[0] = http_post_string(\"http://www.MacSweeney Games.com/CatchTheHaggis?game_hiscores=\" + string(global.game_id), str)","\n  ","The above code will encode a DS map into a JSON string. A sha1 hash is then generated and stored in an ini file so that this can later be used to check the integrity of the JSON should the same information be received later form the server. The JSON\n    is then sent.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Encoding","\n        ","Next: ","sha1_string_unicode","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sha1_string_utf8"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1827"})