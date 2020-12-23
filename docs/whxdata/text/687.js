rh._.exports({"0":["layer_background_create","layer_background_create"],"1":["layer_background_create"],"2":["layer_background_create"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","layer_background_create","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can assign a sprite resource to a layer to be used as a background in your project. You supply the layer ID (which you get when you create the layer using ","layer_create()",")\n    or the layer name (as a string - this will have a performance impact) and a sprite index (which would be the name of the sprite as shown in the Asset Browser), and it will be added to the layer. The function returns the unique ID value for the element,\n    which can then be used in further layer functions for backgrounds.","\n  "," ","\n  ","\n  ","layer_background_create(layer_id, sprite)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n      ","\n        ","sprite","\n        ","The sprite index to be used","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Background element ID (Real)","\n  "," ","\n  ","\n  ","global.back_layer = layer_create(10000);"," global.back_trees = layer_background_create(global.back_layer, spr_Trees);","\n  ","The above code creates a new layer and then adds a new background element to it, setting a sprite to be the background image used.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_destroy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"687"})