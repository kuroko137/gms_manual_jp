rh._.exports({"0":["surface_getpixel_ext","surface_getpixel_ext"],"1":["surface_getpixel_ext"],"2":["surface_getpixel_ext"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","surface_getpixel_ext","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can get the full ","abgr 32bit"," value of any pixel of a (previously created) surface.","\n  ","NOTE",": This function will have a huge performance hit and so should only be used when absolutely necessary.","\n  "," ","\n  ","\n  ","surface_getpixel_ext(surface_id, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","surface_id","\n        ","The ID of the surface to use.","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the pixel to check","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the pixel to check","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","col = surface_getpixel_ext(mouse_x, mouse_y);"," alpha = (col >> 24) & 255;"," blue = (col >> 16) & 255;"," green = (col >> 8) & 255;"," red = col & 255;","\n  ","The above code will get the 32bit colour value at the position of the mouse and then split it into its component values, storing them in variables.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_free","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["surface_getpixel_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"981"})