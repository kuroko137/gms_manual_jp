rh._.exports({"0":["collision_ellipse_list","collision_ellipse_list"],"1":["collision_ellipse_list"],"2":["collision_ellipse_list"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","collision_ellipse_list","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function is the same as the ","collision_ellipse()"," function, only instead of just detecting one instance in collision at a time, it will detect multiple instances. You supply the x/y positions of the top\n    left and bottom right of the elliptical area to check along with the object to check for, and you can set the check to be precise (in which case all instances being checked will need to have ","precise"," collision masks) and whether the check should\n    include the calling instance or not. You supply a ","DS list"," too which will be populated with the unique ","id","    values of all instances of the object that are considered to be in collision with the calling instance, and you have the option to order the list based on the distance from the center of the elliptical area to the origin of the instances found to\n    be in collision. The function returns the number of instances found, or 0 if none are found.","\n  ","Note that instead of an object index you can supply the ","instance keyword"," ","all",", to check for all instances in the current room, which may include the instance running\n    the code (depending on the ","notme"," argument).","\n  "," ","\n  ","\n  ","collision_ellipse_list(x1, y1, x2, y2, obj, prec, notme, list, ordered);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the left side of the ellipse to check.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the top side of the ellipse to check.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the right side of the ellipse to check.","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the bottom side of the ellipse to check.","\n      ","\n      ","\n        ","obj","\n        ","The object to check for instance collisions.","\n      ","\n      ","\n        ","prec","\n        ","Whether the check is based on precise collisions (","true",", which is slower) or its bounding box in general (","false",", faster).","\n      ","\n      ","\n        ","notme","\n        ","Whether the calling instance, if relevant, should be excluded (","true",") or not (","false",").","\n      ","\n      ","\n        ","list","\n        ","The DS list to use to store the IDs of colliding instances.","\n      ","\n      ","\n        ","ordered","\n        ","Whether the list should be ordered by distance (","true",") or not (","false",").","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Int (The number of instances found to be in collision)","\n  "," ","\n  ","\n  ","var _list = ds_list_create();"," var _num = collision_ellipse_list(x - 100, y - 100, x + 100, y + 100, obj_Enemy, false, true, _list, false);"," if _num > 0","     {\n    ","     for (var i = 0; i < _num; ++i;)","         {\n    ","         instance_destroy(_list[| i]);","         }\n    ","     }\n    "," ds_list_destroy(_list);\n  ","\n  ","The code above will check an elliptical area 100 pixels around the calling instance position for collisions with instances of \"obj_Enemy\". If there are any collisions, then the pre-created list is looped through and each instance that was\n    in the collision is destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","collision_line","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["collision_ellipse_list"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"813"})