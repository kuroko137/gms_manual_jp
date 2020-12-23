rh._.exports({"0":["Create Buffer","Create Buffer"],"1":["DnD™ Action - Create Buffer"],"2":["Create Buffer"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Create Buffer","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This action can be used to allocate a portion of memory as a buffer in your game, with the function returning the unique ","buffer id"," value that should be stored in a variable and used for all further function calls to the buffer. You can supply\n    a global variable, an instance variable or have the action create a temporary local variable for storing the buffer ID. Note that you can create additional buffers by clicking the plus icon "," ","beside\n    the action, and selecting another variable to hold the buffer ID.","\n  ","NOTE",": It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again\n    using ","Delete Buffer"," action (in the ","Other - Clean Up"," event, for example). This is especially important to remember when using a temporary local\n    variable, as if you do not remove the buffer again before the end of the event or action script then you will no longer be able access it and can have issues later.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Buffer","\n        ","The buffer index (stored in a variable)","\n      ","\n      ","\n        ","Value","\n        ","The value to add into the list","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code creates a global variable and then a buffer, assigning the unique\n    buffer ID to the variable. This buffer than has two pieces of data written to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffer Actions","\n        ","Next: ","Copy Buffer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Create Buffer"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"2502"})