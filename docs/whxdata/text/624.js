rh._.exports({"0":["layer_y","layer_y"],"1":["layer_y"],"2":["layer_y"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","layer_y","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","You can use this function to set the y position of the layer within the currently scoped room. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string\n    - this will have a performance impact) and the function will move the layer the given number of pixels along the vertical axis of the room.","\n  "," ","\n  ","\n  ","layer_y(layer_id, y)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to set the y position of","\n      ","\n      ","\n        ","y","\n        ","The y position in the room to set the layer to","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Sprites\");"," if layer_get_x(lay_id) != 0 || layer_get_y(lay_id) != 0","     {\n    ","     layer_x(lay_id, 0);","     layer_y(lay_id, 0);","     }\n  ","\n  ","The above code checks the given layer position and if it is not set to (0, 0) then it is set to that position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_hspeed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_y"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"624"})