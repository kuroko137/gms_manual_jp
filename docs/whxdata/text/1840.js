rh._.exports({"0":["buffer_fill","buffer_fill"],"1":["buffer_fill,buffer_u8,buffer_s8,buffer_u16,buffer_s16,buffer_u32,buffer_s32,buffer_u64,buffer_f16,buffer_f32,buffer_f64,buffer_bool,buffer_string,buffer_text"],"2":["buffer_fill"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","buffer_fill","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function can be used to fill a previously created buffer with a given data type and value. The data you fill the buffer with must be in agreement with the \"type\" argument of this function, meaning that you can't try to fill with a\n    string and use the unsigned 16bit integer type, for example. The type constants are the same as those used by the ","buffer_read()"," and ","buffer_write()"," functions. The \"size\"\n    is the size of the buffer (in bytes) that you wish to fill, while the offset is the offset value (also in bytes) from the start of the buffer to start the fill from.","\n  "," ","\n  ","\n  ","buffer_fill(buffer, offset, type, value, size);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to fill.","\n      ","\n      ","\n        ","offset","\n        ","The data offset value (in bytes).","\n      ","\n      ","\n        ","type","\n        ","The type of data that is to be written to the buffer (see the list of constants ","here",").","\n      ","\n      ","\n        ","value","\n        ","The data to write.","\n      ","\n      ","\n        ","size","\n        ","The size of the buffer (in bytes) that you wish to fill.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","map_buffer = buffer_create(16384, buffer_fixed, 0);"," buffer_fill(map_buffer, 0, buffer_u16, 0, 16384);","\n  ","The above code finds the start of the buffer with the id stored in the variable \"buff\" them writes a series of signed 16bit integer values to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_seek","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_fill"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1840"})