rh._.exports({"0":["buffer_peek","buffer_peek"],"1":["buffer_peek,buffer_u8,buffer_s8,buffer_u16,buffer_s16,buffer_u32,buffer_s32,buffer_u64,buffer_f16,buffer_f32,buffer_f64,buffer_bool,buffer_string,buffer_text"],"2":["buffer_peek"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","buffer_peek","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With the ","buffer_read()"," function, you can read data from the given buffer at the current \"seek\" position, with each piece of data being read advancing this position by the bytes being read or written.\n    However, it may be necessary for you to read a given piece of data without wanting to change the current seek position, and that's when you would use this function. You simply supply the function with a buffer id, and then an offset position (from\n    the buffer start) within that buffer to read from, as well as the data type that you are wanting to read.","\n  ","NOTE",": Using the incorrect data type for the data being read will result in erroneous values!","\n  ","If the function succeeds then a value (Real, string, int, etc...) will be returned depending on the data type, while a failure will return simply 0.","\n  "," ","\n  ","\n  ","buffer_peek(buffer, offset, type);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to use.","\n      ","\n      ","\n        ","offset","\n        ","The offset position (in bytes) within the buffer to read the given data from.","\n      ","\n      ","\n        ","type","\n        ","The type of data that is to be read from the buffer (see the list of constants ","here",").","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real/String or 0 if it fails.","\n  "," ","\n  ","\n  ","var red = buffer_peek(buff, 1, buffer_u8);"," var green = buffer_peek(buff, 2, buffer_u8);"," var blue = buffer_peek(buff, 3, buffer_u8);"," image_blend = make_colour_rgb(red, green, blue);","\n  ","The above code will get three values from three different positions within the buffer indexed in the variable \"buff\" and then use those values to set the image blend of the instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_poke","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_peek"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1845"})