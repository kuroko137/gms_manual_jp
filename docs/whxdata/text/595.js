rh._.exports({"0":["room_goto_previous","room_goto_previous"],"1":["room_goto_previous"],"2":["room_goto_previous"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","room_goto_previous","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can make your game go to the previous one as listed in the ","Room Manager"," at the time the game was compiled. If this room does not exist, an error will be thrown and the game\n    will be forced to close. Note that the room will not change until the end of the event where the function was called, so any code after this has been called will still run if in the same event. The caveat to this is that any code which creates instances\n    that is called after this, will ","not"," create the instance and so should be called before changing room. This function will also trigger the ","Room End"," event.","\n  "," ","\n  ","\n  ","room_goto_previous();","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if room_exists(room_previous(room))","     {","     room_goto_previous();","     }","\n  ","The above code will check to see if there is another room before the current one and if so it will go to that room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_restart","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room_goto_previous"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"595"})