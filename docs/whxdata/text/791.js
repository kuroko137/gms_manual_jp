rh._.exports({"0":["mp_linear_path_object","mp_linear_path_object"],"1":["mp_linear_path_object"],"2":["mp_linear_path_object"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","mp_linear_path_object","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function computes a straight line path from the current instance position to the point specified by the \"xgoal\" and \"ygoal\" values. It uses the indicated step size, the same as in the function ","mp_linear_step()",".\n    The indicated path must already exist and will be overwritten by the new path and the function will return if a complete path was found (true) or not (false). A full path is only found there was no collision with the specified object or instance and\n    if false is returned then a path is still generated, but it will only run up to the position where the path was blocked.","\n  ","NOTE",": This function does not move the instance. It sets a path only, and you must use the ","Path"," functions for movement.","\n  "," ","\n  ","\n  ","mp_linear_path_object(path, xgoal, ygoal, stepsize, obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","path","\n        ","The index of the path to be used","\n      ","\n      ","\n        ","xgoal","\n        ","The target x position.","\n      ","\n      ","\n        ","ygoal","\n        ","The target y position.","\n      ","\n      ","\n        ","stepsize","\n        ","The speed the instance moves in pixels per step.","\n      ","\n      ","\n        ","obj","\n        ","The object that is to block the path. Can be an object index, an instance id or the special keyword ,","all","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if mp_linear_path_object(path, mouse_x, mouse_y, 4, obj_Wall)","     {","     path_start(path, 4, 0, 0);","     }","\n  ","The above code checks for a collision with \"obj_Wall\" along the path between the object running the code and the x/y position of the mouse. If there is no collision and the complete path is generated then it will start the object along the\n    path generated.","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_potential_settings","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["mp_linear_path_object"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"791"})