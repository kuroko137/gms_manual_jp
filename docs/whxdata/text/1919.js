rh._.exports({"0":["xboxlive_stats_get_leaderboard","xboxlive_stats_get_leaderboard"],"1":["xboxlive_stats_get_leaderboard,achievement_stat_event"],"2":["xboxlive_stats_get_leaderboard,achievement_stat_event"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","xboxlive_stats_get_leaderboard","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function can be used to retrieve a global leaderboard of ranks for a given statistic. You supply the user ID (as returned, for example, by the function ","xboxlive_get_user()","), the\n    stat string (as defined when you registered it as a \"Featured Stat\"), and then you specify a number of details about what leaderboard information you want to retrieve. Note that you can only retrieve a global leaderboard for int or real\n    stats, but ","not"," for string stats.","\n  ","IMPORTANT!"," Stats used in global leaderboards must be registered as \"Featured Stats\" in the XDP/Windows Dev Center otherwise an error will be returned. If you want local (social) leaderboards, then please see the function ","xboxlive_stats_get_social_leaderboard()",".","\n  ","The function will generate a callback which will trigger a ","System Asynchronous Event",". This event will have the built in DS map "," ","async_load"," ","    which should then be parsed for the following keys:","\n  ","\n    ","\"","id","\" - Will hold the constant ","achievement_stat_event","\n    ","\"","event","\" - Will hold the string \"","GetLeaderboardComplete","\"","\n    ","\"","userid","\" - The user ID associated with the request","\n    ","\"","error","\" - 0 if successful, some other value if there has been an error. The following two are the most common errors returned:\n      ","\n        ","2145844844: Cannot find requested leaderboard (the stat is not registered as a featured stat)","\n        ","-2145844848: Bad request (the stat is not a valid leaderboard type, ie: a string)","\n      ","\n    ","\n    ","\"","errormessage","\" - A string with an error message, if any is available","\n    ","\"","display_name","\" - The unique ID for the leaderboard as defined on the provider dashboard.","\n    ","\"","numentries","\" - The number of entries in the leaderboard that you have received.","\n  ","\n  ","The rest of the DS map will also contain the leaderboard data with the following format (where \"N\" is the position in the leaderboard data, from 0 to \"numentries\"):","\n  ","\n    ","\"","Player","N","\" - The name of the player, where \"N\" is an integer value corresponding to their position within the leaderboard entries list.","\n    ","\"","Playerid","N","\" - The unique user id of the player, \"N\".","\n    ","\"","Rank","N","\" - The rank of the player \"N\" within the leaderboard.","\n    ","\"","Score","N","\" - The score of the player \"N\".","\n  ","\n  "," ","\n  ","\n  ","xboxlive_stats_get_leaderboard(user_id, stat, num_entries, start_rank, start_at_user, ascending);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID of the user to get the leaderboard for","\n      ","\n      ","\n        ","stat","\n        ","The stat (as string) to create the global leaderboard from","\n      ","\n      ","\n        ","num_entries","\n        ","The number of entries from the global leaderboard to retrieve","\n      ","\n      ","\n        ","start_rank","\n        ","The rank in the leaderboard to start from (use 0 if the \"start_at_user\" argument is set to ","true",")","\n      ","\n      ","\n        ","start_at_user","\n        ","Set to ","true"," to start at the user ID rank, ","false"," otherwise (set to ","false"," if the \"start_rank\" argument is anything other than 0)","\n      ","\n      ","\n        ","ascending","\n        ","Set to ","true"," for ascending order and ","false"," for descending order","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","The following is an extended example of how this function can be used. To start with you'd call it in some event like ","Room Start"," or ","Create",":","\n  ","xboxlive_stats_get_leaderboard(user_id, \"GlobalTime\", 20, 1, false, true);","\n  ","The above code would be called to get a list of all social leaderboard positions for the game, and will generate a Social Asynchronous Event call back which we would deal with in the following way:","\n  ","if (async_load[? \"id\"] == achievement_stat_event)","     {\n    ","     if (async_load[? \"event\"] == \"GetLeaderboardComplete\")","         {\n    ","         global.numentries = async_load[? \"numentries\"];","         for(var i = 0; i < numentries; i++;)","             {\n    ","             global.playername[i] = async_load[? \"Player\" + string(i)];","             global.playerid[i] = async_load[? \"Playerid\" + string(i)];","             global.playerrank[i] = async_load[? \"Rank\" + string(i)];","                global.playerscore[i] = async_load[? \"Score\" + string(i)];","             }\n    ","         }\n    ","     }\n  ","\n  ","The above code checks the returned DS map in the Social Asynchronous Event and if its \"id\" matches the constant being checked, it then checks to see if the event has been triggered by returned leaderboard data before looping through the map\n    and storing all the different values in a number of global arrays.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_stats_get_social_leaderboard","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_stats_get_leaderboard"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"1919"})