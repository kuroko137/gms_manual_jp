rh._.exports({"0":["Social","Social"],"1":["Objects - Async Social Event"],"2":["Social,ev_social"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Social","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This event can only be triggered by the ","callback","s"," from various\n    specific ","Social Functions"," and ","UWP Xbox Live Functions"," and will return a ","DS Map"," stored in the variable ","async_load",",\n    containing different key/value pairs depending on the callback from the function that has triggered the event.","\n  ","The DS map will contain a number of keys, the most important of which is the \"","id","\" key. This will return a constant which can then be checked in code to determine which of the many callbacks the event has received.\n    Once you have parsed this key and compared the value returned with the available constants, you can then continue to extract the rest of the information from the map.","\n  ","The function pages on ","Achievements and Leaderboards"," in the Reference section detail the functions and callbacks\n    as well as the constants used to trigger this event, but there are also certain circumstances in which it will be triggered without a function call from the game that is running:","\n  ","\n    ","when your game is launched from the OS dashboard","\n    ","when you complete a challenge","\n    ","when another player completes a challenge","\n    ","when the game is started from the OS dashboard by selecting a challenge","\n  ","\n  ","Any of the above callbacks will trigger the Social Event and an ","async_load"," map will be generated with the following details (note that there is a different \"","id","\" key value to define each\n    of the different reasons that the event was called, but all other contents of the map are the same):","\n  ","\n    ","\"","id","\" - The value of this key will depend on the type of callback triggering the event. it can be one of these constants:","\n  ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","achievement_challenge_received","\n        ","A challenge has been received","\n      ","\n      ","\n        ","achievement_challenge_completed","\n        ","A challenge has been completed.","\n      ","\n      ","\n        ","achievement_challenge_completed_by_remote","\n        ","A challenge has been completed by the other player.","\n      ","\n      ","\n        ","achievement_challenge_launched","\n        ","The game was launched from the OS dashboard with the given challenge.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n    ","\"","playerid","\" - The player id for the challenge.","\n    ","\"","issuerid","\" - The id of the person that issued the challenge.","\n    ","\"","state","\" - The state of the challenge, which will have a value of 0 - 3 (as a string) for invalid, pending, completed or declined.","\n    ","\"","message","\" - The text message for challenge.","\n    ","\"","issueddate","\" - The issue date for challenge","\n    ","\"","completeddate","\" - The completion date for challenge.","\n    ","\"","type","\" - The type of challenge given. Can be one of two constants:","\n  ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","achievement_type_score_challenge","\n        ","A challenge based on the score value.","\n      ","\n      ","\n        ","achievement_type_achievement_challenge","\n        ","A challenge based on an achievement.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n    ","\"","identifier","\" - The identifying string for the challenge.","\n    ","\"","score","\" - The score tied in with the challenge.","\n  ","\n  ","Below you can find a small snippet of code as an example of use:","\n  ","var ident = ds_map_find_value(async_load, \"id\" );"," if ident == achievement_challenge_completed;","    {","    player_id = ds_map_find_value(async_load, \"playerid\");","    issuer_id = ds_map_find_value(async_load, \"issuerid\");","     state = ds_map_find_value(async_load, \"state\");","    date_completed = ds_map_find_value(async_load, \"completeddate\");","    date_issued = ds_map_find_value(async_load, \"issueddate\");","    ach_type = ds_map_find_value(async_load,\n    \"type\");","    ach_ident = ds_map_find_value(async_load, \"identifier\");","    ach_score = ds_map_find_value(async_load, \"score\");","    }","\n  ","For information on this event in conjunction with the UWP target and the XBox Live functions, please see the following page:","\n  ","\n    ","UWP And XBox Live - Match Making","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Async Events","\n        ","Next: ","Steam","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Social"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2338"})