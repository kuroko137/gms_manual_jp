rh._.exports({"0":["steam_get_achievement","steam_get_achievement"],"1":["steam_get_achievement"],"2":["steam_get_achievement"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","steam_get_achievement","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can check the Steam API to see if a specific achievement has been awarded. The achievement should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function\n    should match that used as the ","API Name"," on the control panel.","\n  "," ","\n  ","\n  ","steam_get_achievement(ach_name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ach_name","\n        ","The name of the achievement to get (string).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if hp <= 0","     {\n    ","     global.Deaths += 1;","     if global.Deaths == 10","         {\n    ","         if !steam_get_achievement(\"ach_Player_Dies_Ten_Times\") steam_set_achievement(\"ach_Player_Dies_Ten_Times\");","         }\n    ","     }\n  ","\n  ","The above code will reward the player an achievement if the global variable \"Deaths\" is equal to 10 and if the achievement has not already been awarded.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Statistics","\n        ","Next: ","steam_clear_achievement","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_get_achievement"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1715"})