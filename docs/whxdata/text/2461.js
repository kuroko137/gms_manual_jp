rh._.exports({"0":["Set Tile Data Transform","Set Tile Data Transform"],"1":["DnD™ Action - Set Tile Data Transform"],"2":["Set Tile Data Transform"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Set Tile Data Transform","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this action you can change one of three tile transforms in the tile data. You supply the variable that holds the tile data for the tile, then select the transform to change. Clicking the \"Apply\" check-box will apply that transform and\n    un-checking it will remove it. The tile data is simply a value that reflects the index of the tile along with the transforms applied as well as any custom tile masks that you have used, and this action permits you to change three of those values:\n    Flip, mirror and rotate. Note that you will normally want to get the tile data first using either ","Get Tile Data In Cell"," or ","Get Tile Data At Pixel",", then apply the required\n    transform(s) and then set the tile in the tile map again using ","Set Tile Data In Cell"," or ","Set Tile Data At Pixel",", since this action ","only sets a value but does not apply it to the tile it was taken from",".\n    For more information on tile data, please see the GML section on ","Tile Map Functions",".","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Tile","\n        ","The tile data for the tile to change","\n      ","\n      ","\n        ","Transform","\n        ","The the transform to apply/remove","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code gets the tile data at the mouse position and then\n    checks to see if the tile has had a rotation transform applied to it. If it has then the transform is reset and the tile data sets the tile at the position again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Actions","\n        ","Next: ","Get Tile Data Transform","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Tile Data Transform"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"2461"})