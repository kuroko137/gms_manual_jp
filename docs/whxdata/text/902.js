rh._.exports({"0":["draw_roundrect","draw_roundrect"],"1":["draw_roundrect"],"2":["draw_roundrect"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","draw_roundrect","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can draw either an outline of a rounded rectangle or a filled rounded rectangle where the (x1,y1) position is the top left corner and the (x2,y2) position is the bottom right corner. You can define how precise the drawing of the\n    corners is with the function ","draw_set_circle_precision()",", but this function uses a fixed radius for them (should you need to change the corner radius, use the function ","draw_roundrect_ext()",").\n    Please note that the rectangle being drawn may need different values (+/-1 on the x, y, or width or height) to be drawn with the desired dimensions due to differences across the various supported platforms.","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  ","\n  ","draw_roundrect(x1, y1, x2, y2, outline);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the top left corner of the rounded rectangle (as if it were a normal rectangle).","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the top left corner of the rounded rectangle (as if it were a normal rectangle).","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the bottom right corner of the rounded rectangle (as if it were a normal rectangle).","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the bottom right corner of the rounded rectangle (as if it were a normal rectangle).","\n      ","\n      ","\n        ","outline","\n        ","Whether the rounded rectangle is drawn filled (false) or as a one pixel wide outline (true).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_colour(c_lime);"," draw_roundrect(50, 100, 250, 200, 0);","\n  ","This will draw a filled rounded rectangle, with its theoretical (before being curved) top left corner at (50,100) and its theoretical bottom right corner at (250,200).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_roundrect_colour","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_roundrect"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"902"})