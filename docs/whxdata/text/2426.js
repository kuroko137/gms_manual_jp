rh._.exports({"0":["If Collision Point","If Collision Point"],"1":["DnD™ Action - If Collision Point"],"2":["If Collision Point"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","If Collision Point","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This action is used to check and see if there is a collision with one or more instances of a given object at a specific point in the room and will evaluate to ","true"," if a collision is detected, or ","false"," otherwise. You give the object\n    to check for and the position to check at - which can be an absolute position in the room or a position relative to the instance - and you can also check the ","Not"," flag to check if there is ","not"," a collision at the given position, meaning\n    that the action will then only evaluate as ","true"," if ","no"," collisions are found, otherwise it will evaluate as ","false",". You can also set the ","Exclude Self"," option to exclude the calling instance from the collision check.","\n  ","Next you can check/uncheck the option to ","Return List",". Checking this means the action will create and populate a ","list"," ","data structure with ","all"," instances in collision\n    with the point and set the ","Target"," variable to the DS list ID. When unchecked, it will only set the ","Target"," variable to a value less than 0 when no collision is detected, or the unique ID value of ","one"," of the instances in the collision\n    (note that if multiple instances are in collision then you have no way of knowing which instance ID will be returned when not using a list).","\n  ","If you have selected to return a list - and the Target variable is ","not"," set to ","Temp"," - then you can also select the ","Free Target"," option. When set to ","true",", then the list contained in the target variable will be destroyed and\n    a new list created (and returned to the target variable) each time you call the action. In this way you can re-use the same variable without worrying about memory leaks, as, if you do ","not"," check ","Free Target"," option, you become responsible\n    for destroying the list before using the variable again in the action. Note that ","regardless"," of whether this option is checked or not, if you have set the action to ","Return List",", then the target variable will ","always contain a list ID",",\n    and as such, this will need to be freed when the instance is destroyed or the room ends (you can use the ","Clean Up"," event for this, for example, along with the ","Free Data Structure"," ","action).\n    It is worth noting that you can set the ","Free Target"," option to use a pre-defined variable or an expression and so control when the list data structure is freed by setting the variable elsewhere (or having different outcomes for the expression)\n    as long as it evaluates to ","true","/","false",".","\n  ","Finally, you supply the ","Target"," variable that you want to hold the returned value or list ID. If you flag the Target variable to hold the returned value as being a ","Temp"," (local) variable, then the action will create this variable to hold\n    the return value ","only"," until the end of the event, in this case the Free Target option does nothing and you will be responsible for destroying the DS list if that option has been checked. If no target variable is supplied and the ","Return List","    option is checked, no list will be created.","\n  ","IMPORTANT!"," Collisions will only register for those instances that have a valid collision mask, ie: they have a sprite assigned to the ","sprite_index",", or a sprite assigned to the ","mask_index",". If the instances of the object being\n    checked for in this action have no collision mask then the collision will not be detected, regardless of what the instance is drawing at the time.","\n  ","Note that to add actions into an \"","if","\" block, they should be dropped to the ","side"," of the action, as shown in the image below:","\n  ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Shape","\n        ","The shape to use","\n      ","\n      ","\n        ","Object","\n        ","The object to check for instances of","\n      ","\n      ","\n        ","x1","\n        ","The x position to start from","\n      ","\n      ","\n        ","y1","\n        ","The y position to start from","\n      ","\n      ","\n        ","x2","\n        ","The x position to end at","\n      ","\n      ","\n        ","y2","\n        ","The y position to end at","\n      ","\n      ","\n        ","Free Target","\n        ","Can be set to a variable or expression, or set to ","true","/","false"," to control freeing of the list memory when re-using a list variable","\n      ","\n      ","\n        ","Target","\n        ","The variable to target for the return value of the action","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code checks for a collision at the mouse x/y position with an instance\n    of the object \"obj_Enemy\". If one (or more) collisions is found, an effect is created and at the position of the instance with the ID stored in the Target variable, and then the instance is destroyed. If no collision is found, a different\n    effect is created at the mouse position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collision Actions","\n        ","Next: ","If Any Object At Place","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" If Collision Point"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"2426"})