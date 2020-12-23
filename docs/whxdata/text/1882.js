rh._.exports({"0":["uwp_license_trial_time_remaining","uwp_license_trial_time_remaining"],"1":["uwp_license_trial_time_remaining"],"2":["uwp_license_trial_time_remaining"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","uwp_license_trial_time_remaining","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will return the approximate number of seconds until a time-based trial expires. The value returned by this function is meaningless if the trial is not time-based or if the game is not running in trial mode.","\n  "," ","\n  ","\n  ","uwp_license_trial_time_remaining();","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if uwp_license_trial_version()","     {\n    ","     var secs = uwp_license_trial_time_remaining() mod 60;","     var mins = uwp_license_trial_time_remaining() div 60;","     var hours = mins div 60;","     if secs < 10 secs = \"0\" + string(secs) else secs = string(secs);","        if mins > 60 mins -= (hours * 60);","     if mins < 10 mins = \"0\" + string(mins) else mins = string(mins);","     if hours > 9 hours = \"9\" else hours = string(hours);","     time_string = hours + \":\"\n    + mins + \":\" + secs;","     }\n  ","\n  ","The above code checks to see if the game is being run with a trial licence and if it is it creates a string with the time until the licence expires.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UWP And XBox Live","\n        ","Next: ","uwp_check_privilege","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["uwp_license_trial_time_remaining"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1882"})