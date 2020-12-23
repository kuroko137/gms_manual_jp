rh._.exports({"0":["layer_sprite_x","layer_sprite_x"],"1":["layer_sprite_x"],"2":["layer_sprite_x"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","layer_sprite_x","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function controls the position along the x-axis of the room of the asset sprite element on the layer. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()","    or when you use the function ","layer_sprite_get_id()","), and then set the x value to use (based on the room coordinates).","\n  "," ","\n  ","\n  ","layer_sprite_x(sprite_element_id, x);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","The unique ID value of the sprite element to change","\n      ","\n      ","\n        ","x","\n        ","The x position for the sprite","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Asset_sky\");"," var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");"," layer_sprite_x(spr_id, irandom(room_width));","\n  ","The above code gets the ID value of the sprite asset \"Clouds\" assigned to the layer \"Asset_sky\" and then sets its x position to a random value between 0 and the width of the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_y","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sprite_x"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"723"})