rh._.exports({"0":["draw_light_define_point","draw_light_define_point"],"1":["draw_light_define_point"],"2":["draw_light_define_point"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","draw_light_define_point","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function is for defining a positional light, where you can define the x, y and z position of the light, the light range and its colour (which will also affect the perceived intensity of the light as certain colours appear \"darker\" than\n    others). You must also give the light an index number which what will be used in other functions to reference it.","\n  ","NOTE",": There are only 8 hardware lights available, so only 8 defined lights can be enabled at any one time (although more can be defined).","\n  "," ","\n  ","\n  ","draw_light_define_point(ind, x, y, z, range, col);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index number of the light (arbitrary)","\n      ","\n      ","\n        ","x","\n        ","The x position of the light","\n      ","\n      ","\n        ","y","\n        ","The y position of the light","\n      ","\n      ","\n        ","z","\n        ","The z position of the light","\n      ","\n      ","\n        ","range","\n        ","The light range (in pixels)","\n      ","\n      ","\n        ","col","\n        ","The colour to use for the light (either a constant, a real or a hex value).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_lighting(true);"," draw_light_define_point(1, 200, 123, 50, 2000, c_white);"," draw_light_enable(1, true);","\n  ","The above code will enable lighting for the whole scene, then define a white light at a specific point in the room space, and then finally turn that light on.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Lighting","\n        ","Next: ","draw_light_define_direction","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_light_define_point"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"999"})