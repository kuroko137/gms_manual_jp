rh._.exports({"0":["cloud_string_save","cloud_string_save"],"1":["cloud_string_save"],"2":["cloud_string_save"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","cloud_string_save","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will commit a string to the chosen cloud service for storage. The function will return a unique ","id"," value that should then be used in the appropriate asynchronous event to identify the DS map that is returned as a \"call back\"\n    from the cloud service. The string should contain ","all"," the information that you need to save for your game as you can only store one single \"data blob\" to the cloud, and running this function again will overwrite any previously stored\n    values (as will using the ","cloud_file_save()"," function). The description should be a short string of information that describes the save, eg: \"Level2, Stage2\".","\n  ","For further information on the returned asynchronous data, please see the function ","cloud_synchronise()",".","\n  "," ","\n  ","\n  ","cloud_string_save(string, description);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","The data string to be uploaded.","\n      ","\n      ","\n        ","description","\n        ","A brief description of the data being stored.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var t_str = \"\";"," for (var i = 0; i < 10; i++;)","     {\n    ","     t_str += string(global.Highscore[i]) + \"|\"","     }\n    "," save_check = cloud_string_save(t_str, \"Current Highscores\");"," var file = file_text_open_write(\"Highscores.txt\");"," file_text_write_string(file, t_str);"," file_text_close(file);\n  ","\n  ","The above code creates a string from the values stored in the global array \"Highscores\" and then writes this string to the cloud service for storage, as well as writing it to a file for local storage.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cloud Saving","\n        ","Next: ","cloud_file_save","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["cloud_string_save"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1643"})