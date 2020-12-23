rh._.exports({"0":["steam_stats_ready","steam_stats_ready"],"1":["steam_stats_ready"],"2":["steam_stats_ready"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","steam_stats_ready","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","When using the Steam API, this function can be called to check that the Steam client API has correctly initialised the statistics for your game.","\n  "," ","\n  ","\n  ","steam_stats_ready();","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","global.steam_api = false;"," if steam_initialised()","     {\n    ","     if steam_stats_ready() && steam_is_overlay_enabled()","         {\n    ","         global.steam_api = true;","         }\n    ","     }\n  ","\n  ","The above code will set a global variable to ","true"," if the Steam client API is correctly initialised, along with the Steam statistics and overlay functionality, or it will set the variable to ","false"," otherwise.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Steam API","\n        ","Next: ","steam_get_app_id","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_stats_ready"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1695"})