rh._.exports({"0":["tile_set_rotate","tile_set_rotate"],"1":["tile_set_rotate"],"2":["tile_set_rotate"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","tile_set_rotate","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function can be used to set a given set of tile-data to rotate the tile 90 degrees or not. You give the tile-data, which can be retrieved using the function ","tilemap_get()",", and then set the rotate argument\n    to either ","true"," if you want the tile rotated, or ","false"," if you want the tile to be in its default, un-rotated state. The function will return a modified tile-data set which can then be applied using the ","tilemap_set()","    function.","\n  "," ","\n  ","\n  ","tile_set_rotate(tiledata, rotate)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tiledata","\n        ","the tile-data to set","\n      ","\n      ","\n        ","rotate","\n        ","Set to ","true"," to rotate and ","false"," to leave it as-is","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_sky\");"," var map_id = layer_tilemap_get_id(lay_id);"," var mx = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);"," var my = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);"," var data\n    = tilemap_get(map_id, mx, my);"," var bool = !tile_get_rotate(data);"," data = tile_set_rotate(data, bool);"," tilemap_set(map_id, data, mx, my);","\n  ","The above code gets the tile map ID from the given layer and then gets the x and y cell position for the tile under the mouse. This position is then used to get the tile-data which is rotated and then used to set the tile again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","layer_tilemap_get_id","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tile_set_rotate"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"685"})