rh._.exports({"0":["path_rotate","path_rotate"],"1":["path_rotate"],"2":["path_rotate"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","path_rotate","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","You can use this function to rotate a given path around its center. Remember that in GameMaker Studio 2 (unless you are using physics) the angles are calculated counter-clockwise, so rotating the path by 90 degrees would\n    rotate the path to the ","left",". ","This function changes the actual path resource",", and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of\n    the game. If this is not what you require, then you should use a function like ","path_duplicate()"," to create a copy of the path first, then call this function on the duplicated asset (don't\n    forget to call ","path_delete()"," on the asset when it is no longer required).","\n  ","\n  ","NOTE",": Once a path has been assigned to an instance using the ","path_start()"," function, you can use the ","path_orientation"," variable\n    to change the path rotation too.","\n  "," ","\n  ","\n  ","path_rotate(index, angle);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to flip.","\n      ","\n      ","\n        ","angle","\n        ","The angle of rotation degrees.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","path_rotate(pth_Patrol, 90);","\n  ","This would rotate the given 90 degrees counterclockwise.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_rescale","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_rotate"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2085"})