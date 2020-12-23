rh._.exports({"0":["layer_sprite_get_speed","layer_sprite_get_speed"],"1":["layer_sprite_get_speed"],"2":["layer_sprite_get_speed"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","layer_sprite_get_speed","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function can be used to get the current speed multiplier value of the sprite element. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when\n    you use the function ","layer_sprite_get_id()","), and the function will return real value that represents the speed multiplier being used to animate the sprite. Default value is 1.","\n  "," ","\n  ","\n  ","layer_sprite_get_speed(sprite_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","The unique ID value of the sprite element to get the information from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"sprite_sky\");"," var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");"," if layer_sprite_get_speed(spr_id) > 0","     {\n    ","     layer_sprite_speed(spr_id, 0);","     }\n  ","\n  ","The above code will get the layer ID for the layer named \"sprite_sky\" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the animation speed for the element and if it is greater than 0, it is\n    set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_get_xscale","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sprite_get_speed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"724"})