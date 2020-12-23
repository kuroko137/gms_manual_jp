rh._.exports({"0":["draw_line_colour","draw_line_colour"],"1":["draw_line_colour,draw_line_color"],"2":["draw_line_colour,draw_line_color"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","draw_line_colour","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can draw a 1 pixel wide line with the colour blended between colour 1 at the first point and colour 2 at the second point. The colour settings will over-ride the base colour set with the function ","draw_set_colour()",".\n    Please note that the line being drawn may need different values (+/-1 on the x, y) to be drawn with the desired dimensions due to differences across the various supported platforms.","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  ","\n  ","draw_line_colour(x1, y1, x2, y2, col1, col2);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the start of the line.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the start of the line.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the end of the line.","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the end of the line.","\n      ","\n      ","\n        ","col1","\n        ","The colour of the start of the line.","\n      ","\n      ","\n        ","col2","\n        ","The colour of the end of the line.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_line_colour(50, 50, 300, 50, c_red, c_blue);","\n  ","This would draw a horizontal line from (50,50) to (300,50) with a smooth red to blue gradient.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_line_width","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_line_colour"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"895"})