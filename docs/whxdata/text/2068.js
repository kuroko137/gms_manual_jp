rh._.exports({"0":["image_yscale","image_yscale"],"1":["image_yscale"],"2":["image_yscale"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","image_yscale","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This value sets the vertical scaling (along the y-axis) applied to the sprite that has been assigned to the current instance. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the height of the sprite),\n    larger values will scale up and negative values will mirror the sprite ","and"," scale it unless the value used is exactly -1 (in which case the sprite is just mirrored along the y-axis with no scaling).","\n    ","\n  "," ","\n  ","\n  ","image_yscale;","\n  "," ","\n  ","\n  ","Real (single precision floating point value)","\n  "," ","\n  ","\n  ","if image_xscale < 5","     {\n    ","     image_xscale += 0.2;","     image_yscale = image_xscale;","     }\n    "," else\n    ","     {\n    ","     instance_create_layer(x, y, \"Effects\", obj_Explosion);","     instance_destroy();\n    ","     }\n  ","\n  ","The above code scales the sprite and then once it is scaled to 5 times its original size, a new instance of another object is created and the instance destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Instance Variables","\n        ","Next: ","mask_index","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["image_yscale"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2068"})