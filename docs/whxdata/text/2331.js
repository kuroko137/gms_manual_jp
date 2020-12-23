rh._.exports({"0":["Dialog","Dialog"],"1":["Objects - Async Dialog Event"],"2":["Dialog,ev_dialog_async"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Dialog","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","The Dialog asynchronous event is only triggered when it gets a ","callback"," from one of the\n    special ","asynchronous dialog functions",", like ","get_login_async()"," (please\n    see this function for an extended code example of how this event is used).","\n  ","These events are the ones that ask for some type of user input, which can be a name, login details, a number or a colour etc... As most devices do not like sitting in a loop waiting for a reply, they have to be asynchronous and GameMaker Studio 2 will\n    continue to run in the background while these functions have a dialogue open and until they get the required user input which triggers this event. This means that if the dialog is open while a game is in progress, you should take steps to pause the\n    game until the dialog callback has been recieved.","\n  ","Again, a ","DS Map"," is returned with the ID held in the special variable ","async_load",".\n    The values held in this map will depend on the function used, and you should consult the individual entries for each function in this manual for more details.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Async Events","\n        ","Next: ","HTTP","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Dialog"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2331"})