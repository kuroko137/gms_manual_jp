rh._.exports({"0":["audio_resume_sync_group","audio_resume_sync_group"],"1":["audio_resume_sync_group"],"2":["audio_resume_sync_group"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","audio_resume_sync_group","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will resume the given sync group if it is playing and has previously been paused (using the function ","audio_pause_sync_group","). The group index is the value returned when you created the\n    group using the function ","audio_create_sync_group()",".","\n  ","NOTE",": This functionality is not available for the HTML5 target platform.","\n  "," ","\n  ","\n  ","audio_resume_sync_group(group_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","group_index","\n        ","The group index to resume.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (keyboard_check_pressed((ord)\"P\"))","    {\n    ","    global.Pause = !global.Pause","    if global.Pause","       {\n    ","       audio_pause_sync_group(sg);\n    ","       }\n    ","    else\n    ","       {\n    ","       audio_resume_sync_group(sg);\n    ","       }\n    ","    }\n  ","\n  ","The above code checks for a key press of the \"P\" key, and if one is detected it toggles the \"global.Pause\" variable then checks it to pause or resume the sync group indexed in the variable \"sg\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Synchronisation","\n        ","Next: ","audio_sync_group_get_track_pos","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_resume_sync_group"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"414"})