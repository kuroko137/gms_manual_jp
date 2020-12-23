rh._.exports({"0":["buffer_async_group_begin","buffer_async_group_begin"],"1":["buffer_async_group_begin"],"2":["buffer_async_group_begin"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","buffer_async_group_begin","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function is called when you want to begin the saving out of multiple buffers to multiple files. The \"groupname\" is a string and will be used as the directory name for where the files will be saved, and should be used as part of the file\n    path when loading the files back into the IDE later (using any of the ","buffer_load()"," functions). This function is ","only"," for use with the ","buffer_save_async()"," function\n    and you must also finish the save definition by calling ","buffer_async_group_end()"," function otherwise the files will not be saved out.","\n  ","Note that for the console platforms (like PS4 for example), the \"groupname\" will be used as the save slot description, and using this function can help you avoid having the UI show for every file that is being saved out. Also note that when\n    using UWP you can roam your save games between native XBox and Microsoft store windows by creating a group that is the same as an ERA Xbox group, for example:","\n  ","if os_type == os_uwp","     {\n    ","     buffer_async_group_begin(\"root/yourgroupname\");\n    ","     }\n    "," else\n    ","     {\n    ","     buffer_async_group_begin(\"yourgroupname\");\n    ","     }\n  ","\n  "," ","\n  ","\n  ","buffer_async_group_begin(groupname);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","groupname","\n        ","The name of the group (as a string).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","buffer_async_group_begin(\"SaveGame\");"," save1 = buffer_save_async(buff1, \"Player_Save1.sav\", 0, 16384);"," save2 = buffer_save_async(buff2, \"Player_Save2.sav\", 0, 16384);"," save3 = buffer_save_async(buff3, \"Player_Save3.sav\",\n    0, 16384);"," save4 = buffer_save_async(buff4, \"Player_Save4.sav\", 0, 16384);"," buffer_async_group_end();\n  ","\n  ","The above code starts a buffer group then sets it to save out 4 files asynchronously. The group definition is then ended (at which point saving will begin).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_async_group_option","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_async_group_begin"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1854"})