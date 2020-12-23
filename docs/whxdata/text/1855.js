rh._.exports({"0":["buffer_poke","buffer_poke"],"1":["buffer_poke,buffer_u8,buffer_s8,buffer_u16,buffer_s16,buffer_u32,buffer_s32,buffer_u64,buffer_f16,buffer_f32,buffer_f64,buffer_bool,buffer_string,buffer_text"],"2":["buffer_poke"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","buffer_poke","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With the ","buffer_write()"," function, you can write data to the given buffer at the current \"seek\" position, with each piece of data advancing this position by the bytes being written or read. However, it\n    may be necessary for you to change a given piece of data without wanting to change the current seek position, and that's when you would use this function. You simply supply the function with a buffer index, and then the offset position from the\n    buffer start (in bytes) within that buffer to write to, as well as the data type and the value to be written.","\n  "," ","\n  ","\n  ","buffer_poke(buffer, offset, type, value);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to use.","\n      ","\n      ","\n        ","offset","\n        ","The offset position (in bytes) within the buffer to write the given data to.","\n      ","\n      ","\n        ","type","\n        ","The type of data that is to be written to the buffer (see the list of constants ","here",").","\n      ","\n      ","\n        ","value","\n        ","The data to add to the buffer, in accordance with the type specified.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","buffer_poke(buff, 3, buffer_u8, colour_get_blue(image_blend));","\n  ","The above code will add the blue component value of the colour used for the image blend into the buffer indexed in the variable \"buff\", at the third position in the buffer and as an unsigned 8bit value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_save","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_poke"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1855"})