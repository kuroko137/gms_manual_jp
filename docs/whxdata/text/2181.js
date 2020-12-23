rh._.exports({"0":["physics_world_create","physics_world_create"],"1":["physics_world_create"],"2":["physics_world_create"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","physics_world_create","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","Even if you have defined the physics for your objects, without a world to place them in they will default to the traditional GameMaker Studio 2 collision system, so you need this function to create the physics system for the specified room either\n    in an object event, or the creation code of the room itself (it can also be defined without using code in the room editor). This function will associate a physics \"world\" with the room and all instances created in the room will behave using\n    the physics that has been defined for them and the world itself.","\n  ","You'll notice that we have an argument that defines a ratio between pixel size and metres.\n    This is because the physics functions work using real-world measurements and thus we must translate pixel coordinates and pixel sizes into these real-world measurements using a \"pixel to metre scale\". You'll want to adjust the ","pixeltometrescale","    setting until the average pixel size of the objects you are using translates roughly into simulated physics objects of an appropriate size, and above you can see that we have set it to 32 pixels being the equivalent of 1 metre. It should be noted\n    that the physics system will work with larger and smaller ratios, but that the best performance is when the real world measurements of your objects are no less than 0.1 metres and no more than 50 metres.","\n  "," ","\n  ","\n  ","physics_world_create(pixeltometrescale);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","pixeltometrescale","\n        ","defines the ratio of pixels on screen to metres in the real world. A ratio of 32:1 will be specified as 1/32 (or 0.03125).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","physics_world_create(1/32);","\n  ","The above code will create a physics world in the current room with a scale ratio of 32 pixels being the equivalent of 1 metre.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Physics World","\n        ","Next: ","physics_world_gravity","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_world_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2181"})