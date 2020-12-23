rh._.exports({"0":["ds_map_secure_load","ds_map_secure_load"],"1":["ds_map_secure_load"],"2":["ds_map_secure_load"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","ds_map_secure_load","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will load a previously saved DS map from the given file. This file must have been previously created using the ","ds_map_secure_save()"," function, and, when loaded, the function will return the\n    ","index"," of the DS map that has been created from the loaded data. This DS map index should be stored in a variable and used for all further function calls to this map. Note that if the DS map being loaded was saved with an array as one of the\n    key values, this array will have been converted into a DS list on load.","\n  ","IMPORTANT!"," One of the features of a secure saved file is that it is locked to the device that it was created on, so you cannot load a file saved on one device into a project running on another device.","\n  "," ","\n  ","\n  ","ds_map_secure_load(filename);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","filename","\n        ","The name of the file to load the map data from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (DS map index)","\n  "," ","\n  ","\n  ","p_map = ds_map_secure_load(\"p_data.dat\");","\n  ","The above code will load a securely saved DS map and store its index value in a variable for future use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_secure_load_buffer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_secure_load"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1326"})