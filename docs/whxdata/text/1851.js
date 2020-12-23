rh._.exports({"0":["buffer_load_partial","buffer_load_partial"],"1":["buffer_load_partial"],"2":["buffer_load_partial"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","buffer_load_partial","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will load some of the buffer data that was previously saved using the ","buffer_save()"," functions into an already created buffer. You give the id of the previously created buffer to load into, then the saved buffer file to load, and then the offset from the start of the buffer (in bytes) that you wish to load the data from. The following arguments are for setting the length of the buffer data (in bytes) from the initial offset point that you wish to load and the offset point to load the data to in the buffer (again, in bytes).","\n  "," ","\n  ","\n  ","buffer_load_partial(buffer, filename, offset, src_len, dest_offset);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to load.","\n      ","\n      ","\n        ","filename","\n        ","The name of the file to load.","\n      ","\n      ","\n        ","offset","\n        ","The offset within the buffer to load to (in bytes).","\n      ","\n      ","\n        ","src_len","\n        ","The length of the part of the buffer to load (in bytes).","\n      ","\n      ","\n        ","dest_offset","\n        ","The offset where to start putting the partial data in the new buffer (in bytes).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","buff = buffer_create(256, buffer_grow, 1);"," var _file = \"save.dat\";"," var _so = 6;"," var _sl = 5;"," var _do= 0;"," buffer_load_partial(buff, _file, _so, _sl, _do);","\n  ","The above code will create a new \"grow\" buffer and then load in a part of the data saved in the file \"save.dat\" to it.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_compress","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_load_partial"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1851"})