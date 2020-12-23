rh._.exports({"0":["sequence_destroy","sequence_destroy"],"1":["sequence_destroy"],"2":["sequence_destroy"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","sequence_destroy","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can destroy a sequence object that has been created dynamically. You supply either the sequence object struct (as returned by the function ","sequence_create()",") or the sequence ID (as returned\n    by the function ","layer_sequence_get_sequence()"," or from the sequence instance struct property ","sequence","). This function should be used whenever a dynamically created\n    sequence is no longer required to free up the memory associated with it.","\n  "," ","\n  ","\n  ","sequence_destroy(sequence_struct_or_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sequence_struct_or_id","\n        ","The sequence object struct or ID to destroy","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if sequence_exists(my_seq)","     {\n    ","     sequence_destroy(my_seq);\n    ","     }\n  ","\n  ","The above code checks to see if the given sequence object exists and if it does it is destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","sequence_get","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sequence_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"473"})