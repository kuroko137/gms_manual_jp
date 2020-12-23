rh._.exports({"0":["achievement_get_challenges","achievement_get_challenges"],"1":["achievement_get_challenges,achievement_challenge_list_received,achievement_filter_friends_only,achievement_filter_all_players"],"2":["achievement_get_challenges,achievement_challenge_list_received,achievement_filter_friends_only,achievement_filter_all_players"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","achievement_get_challenges","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will send a request to the server for information on all current challenges and will trigger a callback ","Social Asynchronous Event"," which contains the\n    ","async_load"," map populated with the relevant key/value pairs. The ","id"," key of this ","DS Map"," is used to identify the correct callback (there can\n    be more than one trigger function for any given asynchronous event), and will be paired with the ","constant"," ","achievement_challenge_list_received"," as well as a number of other key/value pairs for each challenge. The exact contents of the\n    map are shown below:","\n  ","NOTE",": This function is for ","iOS"," only.","\n  ","\n    ","\"","id","\" - For this function it should be ","achievement_challenge_list_received","\n    ","\"","numchallenges","\" - The number of challenges (local and remote) currently available.","\n    ","\"","ChallengeNplayerid","\" - The player id for the challenge, where \"N\" is an integer, EG: \"Challenge5playerid\" is the player id for the fifth challenge in the list.","\n    ","\"","ChallengeNissuerid","\" - The id of the person that issued the challenge, where \"N\" is an integer, EG: \"Challenge2issuerid\" is the issuer id for the second challenge in the list.","\n    ","\"","ChallengeNstate","\" - The state of the challenge \"N\", which will have a value of 0 - 3 (as a string) for ","invalid",", ","pending",", ","completed"," or ","declined",".","\n    ","\"","ChallengeNmessage","\" - The text message for challenge \"N\".","\n    ","\"","ChallengeNissueddate","\" - The issue date for challenge \"N\".","\n    ","\"","ChallengeNcompleteddate","\" - The completion date for challenge \"N\".","\n    ","\"","ChallengeNtype","\" - The type of challenge given. Can be one of two constants:","\n  ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","achievement_filter_friends_only ","\n        ","Get only the scores of the players friends.","\n      ","\n      ","\n        ","achievement_filter_all_players ","\n        ","Get all scores for all players.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n    ","\"","ChallengeNidentifier","\" - The identifying string for the challenge.","\n    ","\"","ChallengeNscore","\" - The score tied in with the challenge.","\n  ","\n  "," ","\n  ","\n  ","achievement_get_challenges()","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","The following code would probably be called after the player has logged into their game account using ","achievement_login()",":","\n  ","achievement_get_challenges();","\n  ","This will send off a request for the current challenge information and generate an asynchronous callback with the special ","async_load"," ds_map containing the following data:","\n  ","var ident = ds_map_find_value(async_load, \"id\");"," if ident == achievement_challenge_list_received","    {\n    ","    var numentries = ds_map_find_value(async_load,\"numchallenges\");","    for(var i = 0; i < numentries; i++;)","       {\n    ","       player_id[i] = ds_map_find_value(async_load, \"Challenge\" + string(i)+\"playerid\");","       issuer_id[i] = ds_map_find_value(async_load, \"Challenge\" + string(i) +\"issuerid\");","       state[i]\n    = ds_map_find_value(async_load, \"Challenge\" + string(i)+\"state\");","       message[i] = ds_map_find_value(async_load, \"Challenge\" + string(i)+\"message\");","       date_completed[i] = ds_map_find_value(async_load,\n    \"Challenge\" + string(i)+\"completeddate\");","       date_issued[i] = ds_map_find_value(async_load, \"Challenge\" + string(i)+\"issueddate\");","       ach_type[i] = ds_map_find_value(async_load, \"Challenge\"\n    + string(i)+\"type\");","       ach_ident[i] = ds_map_find_value(async_load, \"Challenge\" + string(i)+\"identifier\");","       ach_score[i] = ds_map_find_value(async_load, \"Challenge\" + string(i)+\"score\");","       }\n  ","\n  ","The above code checks the returned ","DS Map"," in the ","Social Asynchronous Event"," and if its \"id\" matches the constant being checked, it then loops through the map storing all the different values in a number of arrays. This information\n    can then be used, for example, to create your own, personalised, challenge pages in game.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Leaderboards","\n        ","Next: ","achievement_get_pic","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["achievement_get_challenges"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"1655"})