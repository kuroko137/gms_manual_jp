rh._.exports({"0":["layer_vspeed","layer_vspeed"],"1":["layer_vspeed"],"2":["layer_vspeed"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","layer_vspeed","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","You can use this function to set the vertical speed (in pixels per game frame) of the layer within the currently scoped room. You supply the layer ID (which you get when you create the layer using ","layer_create()",")\n    or the layer name (as a string - this will have a performance impact) and the speed value to set, where a positive value is downwards and a negative value upwards.","\n  "," ","\n  ","\n  ","layer_vspeed(layer_id, vspd)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to set the vertical speed of","\n      ","\n      ","\n        ","vspd","\n        ","The vertical speed (in pixels per game frame) to set","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Sprites\");"," if layer_get_hspeed(lay_id) != 0 || layer_get_vspeed(lay_id) != 0","     {\n    ","     layer_hspeed(lay_id, 0);","     layer_vspeed(lay_id, 0);","     }\n  ","\n  ","The above code checks the given layer horizontal and vertical speeds and if they are not both set to 0 then it is sets them to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_add_instance","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_vspeed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"628"})