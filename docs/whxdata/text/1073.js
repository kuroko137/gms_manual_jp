rh._.exports({"0":["camera_destroy","camera_destroy"],"1":["camera_destroy"],"2":["camera_destroy"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","camera_destroy","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can destroy any camera. When calling the function you supply the unique camera ID value, which you get from the ","camera_create_*"," functions or from the ","view_camera"," array if using the\n    Room Editor to set up the view port and view. You should ","never"," destroy a camera that is currently assigned to a visible view, unless you are assigning a new camera to that view in the same step, and you should ","always"," destroy any cameras\n    that you have created through code when no longer required by your game to prevent memory leaks, and you can also destroy the default cameras if you have any assigned in the Room Editor, but you should assign a new camera to the view port (or disable\n    it) otherwise you will get odd results.","\n  "," ","\n  ","\n  ","camera_destroy(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","camera_id","\n        ","The unique camera ID value returned when you created the camera.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (unique camera ID value)","\n  "," ","\n  ","\n  ","camera_destroy(view_camera[0]);"," view_camera[0] = camera_create_view(0, 0, 640, 480, 0, obj_Player, 5, 5, -1, -1);","\n  ","The above code destroys the camera currently assigned to view port [0] then creates a new camera and assigns its ID to that port.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_apply","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["camera_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1073"})