rh._.exports({"0":["layer_background_sprite","layer_background_sprite"],"1":["layer_background_sprite"],"2":["layer_background_sprite"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","layer_background_sprite","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","Using this function you can set the sprite index of the background element. You supply the background element ID (which you get when you create a background element using ","layer_background_create()"," or\n    when you use the function ","layer_background_get_id()","), and then give a sprite index to be used. The background element image will be replaced with the new sprite. If you give a value of -1, the element\n    will have no sprite assigned (but will still exist and can have a sprite assigned again later).","\n  "," ","\n  ","\n  ","layer_background_sprite(background_element_id, sprite_index)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to change","\n      ","\n      ","\n        ","sprite_index","\n        ","The sprite index of the sprite to use for the background element","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_sky\");"," var back_id = layer_background_get_id(lay_id);"," if layer_background_get_sprite(back_id) != spr_Clouds","     {\n    ","     layer_background_sprite(back_id, spr_Clouds);","     }\n  ","\n  ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check the sprite assigned to the element, setting it to the sprite \"spr_Clouds\"\n    if it is not already.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_htiled","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_sprite"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"690"})