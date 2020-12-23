rh._.exports({"0":["xboxlive_set_rich_presence","xboxlive_set_rich_presence"],"1":["xboxlive_set_rich_presence"],"2":["xboxlive_set_rich_presence"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","xboxlive_set_rich_presence","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will set the rich presence string for the given user. A Rich Presence string shows a user's in-game activity after the name of the game that the user is playing, separated by a hyphen. This string is displayed under a player's\n    Gamertag in the \"Friends & Clubs\" list as well as in the player's Xbox Live user profile.","\n  ","When using this function you need to supply the User ID pointer for the user, and then you can flag the user as currently active in the game or not (using ","true","/","false","). If set to ","false",", then the rich presence string will be\n    appended with \"/afk\" or something appropriate. The next argument is the rich presence string ID to show, and then finally you can (optionally) supply a ","service_config_id"," string. Note that this is an optional argument since if you\n    have called ","xboxlive_stats_setup()"," you don't need to pass the ","service_config_id"," here.","\n  ","For more information on rich presence and how to set up the strings to use in the partner center, please see the following Microsoft documentation:","\n  ","\n    ","Overview Of Presence Strings","\n  ","\n  "," ","\n  ","\n  ","xboxlive_set_rich_presence(user_id, is_user_active, rich_presence_string, [service_config_id])","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The ID pointer of the user to check.","\n      ","\n      ","\n        ","is_user_active","\n        ","Flag the user as active or not.","\n      ","\n      ","\n        ","rich_presence_string","\n        ","The rich presence string ID to use (as defined in the Partner Center - max 50 characters)","\n      ","\n      ","\n        ","service_config_id","\n        ","[OPTIONAL] This is the config_id string for the game.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var pad_uid = xboxlive_user_for_pad(0);"," xboxlive_set_rich_presence(pad_uid, true, \"Playing_Challenge\");","\n  ","The above code gets the user ID pointer for the user assigned to the gamepad [0] slot, and then sets the rich presence string for that user.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_gamedisplayname_for_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_set_rich_presence"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1897"})