rh._.exports({"0":["Start Following Path","Start Following Path"],"1":["DnD™ Action - Start Following Path"],"2":["Start Following Path"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Start Following Path","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This action will start an instance following along a path that has been created in the Asset Browser. You would then use this action to tell your instance which path to follow, what speed to follow the path (measured in pixels per game frame), how to\n    behave when it reaches the end of the path, and whether to follow the absolute or relative path position. When setting the speed you can use negative values to signify that the instance should follow the path in reverse and it's worth noting that\n    the speed you set here can be modified by the speed modifier set in the path editor for each path point, so if you set a path speed to 2 and in the path one of the points has a speed modifier of 200% the actual pixels per game frame speed at that\n    point will be 4.","\n  ","Once you've set the initial path speed you can set how the instance should behave when it reaches the end of the path from the following options (note that when an instance reaches the end of a path this will also trigger an ","Other - Path Ended Event","):","\n  ","\n    ","Stop",": End the path, stopping the instance on the last path point.","\n    ","Restart",": Continue the path from the start, jumping to the start position again if the path is not marked as closed in the Path Editor.","\n    ","Loop",": Continue from the current position to run the path again.","\n    ","Reverse",": Go backwards along the path again (achieved by reversing the path follow speed), and when it reaches the start of the path, it will reverse again, etc...","\n  ","\n  ","Finally, you can flag the path as being ","Relative"," or not. By default the instance will start to follows the path exactly as you designed and placed it in the Path Editor (the absolute position), but if you flag the ","Relative"," checkbox then\n    it will start to follow the path from the position at which the instance was created (the relative position). The image below illustrates this:","\n  ","As you can see in this image, the two instances are following the ","same"," path started with\n    this action, but one of the instances is following the ","absolute"," path while the other is following the ","relative"," path. It should be noted that when Relative is not flagged the instance will \"jump\" to the start of the path no\n    matter where in the room it is placed.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Path","\n        ","The path resource to start following","\n      ","\n      ","\n        ","Speed","\n        ","The speed (in pixels per game frame) to follow the path","\n      ","\n      ","\n        ","On End","\n        ","The response to reaching the end of the path","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will start the calling instance following a path when a key is\n    pressed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Actions","\n        ","Next: ","Stop Following Path","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Start Following Path"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"2299"})