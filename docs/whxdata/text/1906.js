rh._.exports({"0":["xboxlive_reputation_for_user","xboxlive_reputation_for_user"],"1":["xboxlive_reputation_for_user"],"2":["xboxlive_reputation_for_user"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","xboxlive_reputation_for_user","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can retrieve the XBox Live reputation score for the given user ID pointer.","\n  "," ","\n  ","\n  ","xboxlive_reputation_for_user(requesting_user_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","requesting_user_id","\n        ","The user ID (a pointer) of the user to check","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var _a = 0;"," var _num = xboxlive_get_user_count();"," for (var i = 0; i < _num; ++i;)","     {\n    ","     var _uid = xboxlive_get_user(i);","     if _uid != pointer_null","         {\n    ","         global.UserName[_a] = xboxlive_gamedisplayname_for_user(_uid);","         global.UserScore[_a] = xboxlive_gamerscore_for_user(_uid);","         global.UserRep[_a] = xboxlive_reputation_for_user(_uid);","         global.UserAvatar[_a]\n    = xboxlive_sprite_add_from_gamerpicture(_uid, 256, 0, 0);","         ++a;\n    ","         }\n    ","     }\n  ","\n  ","The above code loops through the logged in users and stores their gamer data in various global arrays.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_sprite_add_from_gamerpicture","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_reputation_for_user"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1906"})