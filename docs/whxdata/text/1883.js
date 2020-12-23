rh._.exports({"0":["uwp_license_trial_user","uwp_license_trial_user"],"1":["uwp_license_trial_user"],"2":["uwp_license_trial_user"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","uwp_license_trial_user","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will return the User ID pointer whose trial license is currently being used, or it will return ","pointer_null"," if the user is not currently active or if the game is not currently in trial mode.","\n  "," ","\n  ","\n  ","uwp_license_trial_user();","\n  "," ","\n  ","\n  ","Pointer","\n  "," ","\n  ","\n  ","if gamepad_button_check_pressed(0, gp_start)","     {\n    ","     if uwp_license_trial_version()","         {\n    ","         var _uid = uwp_license_trial_user();","         uwp_show_help(_uid);\n    ","         }\n    ","     }\n  ","\n  ","The above code checks to see if a button is pressed and then checks the app to see if it is running with a trial licence. If it is, then it gets the User ID for licence and opens the help file for that user.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UWP And XBox Live","\n        ","Next: ","uwp_license_trial_time_remaining","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["uwp_license_trial_user"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1883"})