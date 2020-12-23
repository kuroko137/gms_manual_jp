rh._.exports({"0":["collision_point_list","collision_point_list"],"1":["collision_point_list"],"2":["collision_point_list"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","collision_point_list","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function is the same as the ","collision_point()"," function, only instead of just detecting one instance in collision at a time, it will detect multiple instances. You supply the x/y position of the point to\n    check and you can set the check to be precise (in which case all instances being checked will need to have ","precise"," collision masks) and whether the check should include the calling instance or not. You supply a ","DS list","    too which will be populated with the unique ","id"," values of all instances of the object that are considered to be in collision with the calling instance, and you have the\n    option to order the list based on the distance from the given point to the origin of the instances found to be in collision. The function returns the number of instances found, or 0 if none are found.","\n  ","Note that instead of an object index you can supply the ","instance keyword"," ","all",", to check for all instances in the current room, which may include the instance running\n    the code (depending on the ","notme"," argument).","\n  "," ","\n  ","\n  ","collision_point_list(x, y, obj, prec, notme, list, ordered);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the point to check.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the point to check.","\n      ","\n      ","\n        ","obj","\n        ","The object to check for instance collisions.","\n      ","\n      ","\n        ","prec","\n        ","Whether the check is based on precise collisions (","true",", which is slower) or its bounding box in general (","false",", faster).","\n      ","\n      ","\n        ","notme","\n        ","Whether the calling instance, if relevant, should be excluded (","true",") or not (","false",").","\n      ","\n      ","\n        ","list","\n        ","The DS list to use to store the IDs of colliding instances.","\n      ","\n      ","\n        ","ordered","\n        ","Whether the list should be ordered by distance (","true",") or not (","false",").","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (The number of instances found to be in collision)","\n  "," ","\n  ","\n  ","var _list = ds_list_create();"," var _num = collision_point_list(x, y, obj_Enemy, false, true, _list, false);"," if _num > 0","     {\n    ","     for (var i = 0; i < _num; ++i;)","         {\n    ","         instance_destroy(_list[| i]);","         }\n    ","     }\n    "," ds_list_destroy(_list);\n  ","\n  ","The code above will check the position of the calling instance for collisions with instances of \"obj_Enemy\". If there are any collisions, then the pre-created list is looped through and each instance that was in the collision is destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","collision_rectangle","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["collision_point_list"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"815"})