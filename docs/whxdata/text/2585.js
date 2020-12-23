rh._.exports({"0":["Emit Particles","Emit Particles"],"1":["DnD™ Action - Emit Particles"],"2":["Emit Particles"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Emit Particles","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This action is used to create particles from an emitter. You supply the particle system ID that the emitter belongs to (as returned by the action ","Create Particle System",") and then the actual emitter ID (as returned\n    by the action ","Create Particle Emitter","), and finally the particle type to create (as returned by the action ","Create Particle Type","). You can then select to \"Burst\"\n    or \"Stream\" the particles from the emitter, as well as give the number of them you want to create.","\n  ","When you choose to stream particles, you do not need to place this action in a game frame event like the Step Event or the Draw event, but instead simply call it once in the Create Event (for example) and the emitter will stream particles every game\n    frame until you call this action again to stop it (by setting the count value to 0). If you choose to burst the particles, then you can call this in any event you choose and the particles will be created once.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","System","\n        ","The ID of the system that the emitter is in","\n      ","\n      ","\n        ","Emitter","\n        ","The ID of the emitter to use","\n      ","\n      ","\n        ","Type","\n        ","The ID of the particle type to create","\n      ","\n      ","\n        ","Event","\n        ","The event type for the particles, either \"Burst\" or \"Stream\"","\n      ","\n      ","\n        ","Count","\n        ","The the number of particles to burst or stream","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will create a particle emitter, set it's region,\n    and then set it to emit a stream of particles.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Set Emitter Region","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Emit Particles"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"2585"})