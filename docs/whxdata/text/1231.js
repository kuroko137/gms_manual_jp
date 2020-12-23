rh._.exports({"0":["event_data","event_data"],"1":["event_data"],"2":["event_data"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","event_data","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This variable is ","global"," in scope and is used to hold a ","DS Map"," when used in the ","Gesture Events",", and -1 at\n    all other times. The actual contents of the DS map will depend on the type of gesture event that triggered it, so refer to the individual sections for those events.","\n  "," ","\n  ","\n  ","event_data;","\n  "," ","\n  ","\n  ","Real (integer value)","\n  "," ","\n  ","\n  ","isFlick = event_data[?\"isflick\"];"," if (isFlick)","     {\n    ","     flickVelX = event_data[?\"diffX\"];","     flickVelY = event_data[?\"diffY\"];","     }\n    "," else\n    ","     {\n    ","     flickVelX = 0;","     flickVelY = 0;","     }\n  ","\n  ","The above code is taken from the ","Drag End"," gesture event and checks to see if the vent is a \"flick\" event, and if it is it extracts the required data from the ","event_data"," DS map and uses it to set some variables. If a \"flick\"\n    event is not detected, then the same variables are set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gesture Input","\n        ","Next: ","gesture_get_drag_time","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["event_data"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1231"})