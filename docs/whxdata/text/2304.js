rh._.exports({"0":["Create Particle System","Create Particle System"],"1":["DnD™ Action - Create Particle System"],"2":["Create Particle System"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Create Particle System","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This action will initialise the particle system ready for you to create and use particle types and emitters with it. You give the layer name as a string - for example \"Particle Layer\" (which must exist in the room editor) - and then flag the\n    system as being ","Persistent"," or not. If the system is flagged as Persistent then it will be persisted across all rooms after it has been created, and it will be assigned a managed layer if the initial layer does not exist in subsequent rooms.\n    If persistence is ","not"," flagged, then the system will be automatically destroyed at the end of the room it was created in as will any emitters associated with the system. If you wish to manually remove the system from memory, you need to use\n    the action ","Destroy Particle System",".","\n  ","You also need to supply a target variable that will hold the unique particle system ID value. This ID value is what will be used in other functions to set properties of the system or to tell GameMaker Studio 2 what system to use when creating particles.\n    You can choose to flag this variable as being a temporary local variable, but that will mean that it is discarded at the end of the action script or event, meaning that the system will still exist but leave you without any means to access it, so care\n    must be taken when using this (in general systems will never need to be stored in a temporary local variable, but for certain things, like drawing particles to a surface, it may be required).","\n  ","NOTE",": A persistent particle system, once created, remains resident in the system memory for the duration of the game, and so if you need to recreate it at any point (for example, if you call the ","Restart Game","    action), then you ","must destroy the current system first"," otherwise you get a memory leak. A memory leak happens when a resource is added to memory and then \"de-referenced\", meaning that GameMaker Studio 2 has no way to interact with\n    that resource any more. This leads to the memory being clogged by inaccessible resources which in turn can cause issues with your game. To destroy a persistent particle system when no longer required use the action ","Destroy Particle System",".","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Render Depth","\n        ","The depth to set the particle system","\n      ","\n      ","\n        ","Target","\n        ","The target variable to hold the unique ID value of the created system","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code creates a global\n    variable then creates a new particle system and assigns its unique ID value to the global variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Destroy Particle System","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Create Particle System"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"2304"})