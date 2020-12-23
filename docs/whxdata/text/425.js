rh._.exports({"0":["path_get_point_x","path_get_point_x"],"1":["path_get_point_x"],"2":["path_get_point_x"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","path_get_point_x","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will return the x position (in room coordinates) of the point that you input for the path that you index. If the point is outside of the range of the path (ie: a path has 8 points and you ask for the x position of point 10) then a value\n    of 0 will be returned.","\n  "," ","\n  ","\n  ","path_get_point_x(index, n);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to check.","\n      ","\n      ","\n        ","n","\n        ","The point identity to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","\n  ","if (path_position == 1)","     {\n    ","     var _num = path_get_number(pth_Patrol);","     var _pos = floor(random(_num));","     x = path_get_point_x(pth_Patrol, _pos);","     y = path_get_point_y(pth_Patrol, _pos);","     path_position = (1 / _num) * _pos;","     }\n  ","\n  ","The above code will check to see if an instance is at the end of a path. If it is it will then choose a random point on the path and move the instance to that point.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Paths","\n        ","Next: ","path_get_point_y","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_get_point_x"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"425"})