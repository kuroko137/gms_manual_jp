rh._.exports({"0":["ds_stack_read","ds_stack_read"],"1":["ds_stack_read"],"2":["ds_stack_read"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","ds_stack_read","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can recreate a saved DS stack (one that has previously been written as a string using ","ds_stack_write()","). You must first create a new DS stack to read the string into, and if the DS stack\n    already exists and has information stored in it, then this will be cleared before reading. This function is of vital importance when creating save/load mechanisms for your game. Note that if the data structure was created with previous versions of\n    ","GameMaker"," you should add the optional argument \"legacy\", setting it to ","true"," as the string format has changed with this version.","\n  "," ","\n  ","\n  ","ds_stack_read(id, str [, legacy] );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to read into.","\n      ","\n      ","\n        ","str","\n        ","The string to read from.","\n      ","\n      ","\n        ","legacy (","optional",")","\n        ","Can be either ","true"," or ","false"," or omitted completely.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","stack = ds_stack_create();"," ini_open(\"save.ini\");\n    "," var str = ini_read_string(\"Stacks\", \"0\", \"\");"," if (str != \"\")","     {\n    ","     ds_stack_read(stack, str);","     }\n    "," ini_close();\n  ","\n  ","The above code creates a stack and stores the index in the variable \"stack\". It then opens an ","ini"," file and reads a string from that, checking to make sure that the string is not returned as empty first. This string is then read into\n    the newly created DS stack .","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","ds_stack_create","\n        ","Next: ","ds_stack_write","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_stack_read"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1373"})