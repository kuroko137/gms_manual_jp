rh._.exports({"0":["Encoding And Hashing","Encoding And Hashing"],"2":["File Encoding,File Hashing,encode,decode,sha1,md5,crc32,base64"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Encoding And Hashing","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","When dealing with external files, there is always the possibility that the end user could open and change the information that they contain, and so change your game. This can result in broken game-play elements or fraudulent scores on-line (for example),\n    and so GameMaker Studio 2 provides you with some basic ","encoding"," functions as well as functions to perform ","hashing"," checks on strings\n    and files to make sure that they have maintained their integrity before being used. There are also some functions supplied for encoding and decoding ","JSON"," format strings.","\n  ","NOTE: ","Encoding is NOT encryption! A base64 encoding renders the file unreadable to the naked eye and will require an effort on behalf of the user to decode, but it is not secure from hacking. It is recommended that you mix those functions with\n    your own encryption (there are many forms of encryption and script functions for GameMaker are available on the internet).","\n  "," ","\n  ","\n    ","json_encode","\n    ","json_decode","\n    ","json_stringify","\n    ","json_parse","\n    ","base64_encode","\n    ","base64_decode","\n    ","md5_string_utf8","\n    ","md5_string_unicode","\n    ","md5_file","\n    ","sha1_string_utf8","\n    ","sha1_string_unicode","\n    ","sha1_file","\n    ","zip_unzip","\n    ","load_csv","\n  ","\n  "," ","\n  ","It is worth noting that there are also a number of functions related to encoding and hashing ","Buffers",", which you can find from the following links:","\n  "," ","\n  ","\n    ","buffer_md5","\n    ","buffer_sha1","\n    ","buffer_crc32","\n    ","buffer_base64_encode","\n    ","buffer_base64_decode","\n    ","buffer_base64_decode_ext","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Handling","\n        ","Next: ","File System","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Encoding And Hashing"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"148"})