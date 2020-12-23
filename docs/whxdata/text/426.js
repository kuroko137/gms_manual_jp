rh._.exports({"0":["path_get_point_speed","path_get_point_speed"],"1":["path_get_point_speed"],"2":["path_get_point_speed"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","path_get_point_speed","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can get the speed of the point (as defined in the ","Path Editor"," or when you dynamically add a path point using ","path_add_point()",")\n    expressed as a percentage. So, if you have a path point set to 50 in the path editor, this function would return 50 when used.","\n  "," ","\n  ","\n  ","path_get_point_speed(index, n);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to check.","\n      ","\n      ","\n        ","n","\n        ","The point identity to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if (path_get_point_speed(pth_Patrol, 0) != 100)","     {\n    ","     var _px = path_get_point_x(pth_Patrol, 0);","     var _py = path_get_point_x(pth_Patrol, 0);","     path_change_point(pth_Patrol, 0, _px, _py, 100);","     }\n  ","\n  ","The above code checks the path point \"0\" of the path indexed by \"pth_Patrol\" to see if the speed is not equal to 100. If it is not then it sets the speed of that point to 100.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Paths","\n        ","Next: ","path_get_point_x","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_get_point_speed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"426"})