rh._.exports({"0":["ds_queue_write","ds_queue_write"],"1":["ds_queue_write"],"2":["ds_queue_write"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","ds_queue_write","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function returns a string which can then be stored or transferred to another data structure using the ","ds_queue_read()"," function.","\n  ","NOTE",": The returned string is not a human readable string, but rather a dump of the contents of the data-structure","\n  "," ","\n  ","\n  ","ds_queue_write(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to write.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","ini_open(\"save.ini\");"," var str =ds_queue_write(queue);"," ini_write_string(\"Queues\", \"0\", str);"," ds_queue_clear(queue);\n    "," ini_close();\n  ","\n  ","The above code opens an ini file and then writes a string containing the information stored in the DS queue indexed in the variable \"queue\". The queue is then cleared and the ini file closed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Queues","\n        ","Next: ","ds_queue_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_queue_write"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1361"})