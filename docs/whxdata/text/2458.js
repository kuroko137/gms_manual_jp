rh._.exports({"0":["Set Tile Data At Pixel","Set Tile Data At Pixel"],"1":["DnD™ Action - Set Tile Data At Pixel"],"2":["Set Tile Data At Pixel"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Set Tile Data At Pixel","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this action you can set the tile data for a tile cell found at a specific position on a ","tile map"," layer. The tile data is simply a value that reflects the index of the tile along with the\n    flip, mirror, and rotate values, as well as any custom tile masks that you have used. With this action you first supply the layer to target using the name of the layer (a string) as defined in the room editor, and then the x and y axis in the room\n    to set the tile data for. Note that the tile data will be set for the tile map \"cell\" in which the given position lands. For example, if your tile set tiles are 16x16, then the tile map layer will hold tiles in cells of 16x16 pixels, so\n    if you use this action to target the room position (8, 8), you will be changing the tile in the cell (0, 0) of the tile map.","\n  ","NOTE",": The layer selected ","must"," have been defined as a Tile Map Layer in the room editor, otherwise you may get errors.","\n  ","The final argument for the action is the tile data itself. You would normally retrieve the tile data for the tile map cell using the action ","Get Tile Data At Pixel"," and then manipulate it using the action ","Set Tile Data Transform","    before setting it again with this action. For more information on tile data, please see the GML section on ","Tile Map Functions",".","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Layer","\n        ","The layer with the tile map to target","\n      ","\n      ","\n        ","X","\n        ","The position along the horizontal (X) axis to set the tile-data for","\n      ","\n      ","\n        ","Y","\n        ","The position along the vertical (Y) axis to set the tile-data","\n      ","\n      ","\n        ","Data","\n        ","The tile-data to use for setting the cell at the position","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code tests for a mouse click and when one is received\n    it retrieves the tile-data for the cell that coincides with the mouse position. This data is then modified and returned to the tile map layer, rotating the tile in that cell.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Actions","\n        ","Next: ","Get Tile Data At Pixel","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Tile Data At Pixel"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"2458"})