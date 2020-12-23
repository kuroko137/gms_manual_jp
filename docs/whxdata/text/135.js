rh._.exports({"0":["Steam Achievements","Steam Achievements"],"2":["Steam Achievements,Steam Statistics"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Steam Achievements","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","The Steam Stats and Achievements API provides an easy way for your game to provide persistent, roaming achievement and statistics tracking for your users. The user's data is associated with their Steam account, and each user's achievements and\n    statistics can be formatted and displayed in their Steam Community Profile.","\n  ","In addition to providing highly-valued rewards to players of your games, achievements are useful for encouraging and rewarding teamwork and player interaction, providing extra dimensionality to the game objectives, and rewarding users for spending more\n    of their time in-game, and as such it is recommended that your game has a few. They are easily set up from the Steam Dashboard, but will require that you create special Icons for them.","\n  ","Statistics track fine-grained pieces of information, such as play time, number of power-ups used, etc. You may choose to use them simply for tracking internal game data - so that, for instance, you can grant an achievement based on multi-session game-play\n    statistics collected from the user across multiple computers. Or, you can track interesting game data for display on the user's Steam Community page, where users can compare their own stats against their friends.","\n  ","Statistics come in three types - ","integers",", ","floats ","and ","averages ","- and GameMaker Studio 2 permits you to modify each of these from your game, but they should have been\n    initialised previously from the Steamworks control panel for your game.","\n  ","NOTE:"," You must wait until ","steam_stats_ready()"," has returned true, before attempting to\n    read or write stats and achievements.","\n  ","Further details and instructions on how to use statistics and achievements can be found in the following pages describing the functions:","\n  "," ","\n  ","\n    ","steam_set_achievement","\n    ","steam_get_achievement","\n    ","steam_clear_achievement","\n    ","steam_set_stat_int","\n    ","steam_set_stat_float","\n    ","steam_set_stat_avg_rate","\n    ","steam_get_stat_int","\n    ","steam_get_stat_float","\n    ","steam_get_stat_avg_rate","\n    ","steam_reset_all_stats","\n    ","steam_reset_all_stats_achievements","\n  ","\n  "," ","\n  ","If the user in ","Offline Mode",", Steam keeps a local cache of the stats and achievement data so that the APIs can be use as normal. Any stats unable to be committed are saved for the next time the user is online. In the event that there\n    have been modifications on more than one machine, Steam will automatically merge achievements and choose the set of stats that has had more progress. Because Steam keeps a local cache of stats data it is not necessary for the game to ","also"," keep\n    a local cache of the data on disk, especially as such caches often come in conflict and when they do it looks to a users as if their progress has been reverted, which is a frustrating experience.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Steam","\n        ","Next: ","Steam Cloud","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Achievements And Statistics"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"135"})