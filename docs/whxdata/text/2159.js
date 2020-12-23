rh._.exports({"0":["ds_grid_set","ds_grid_set"],"1":["ds_grid_set"],"2":["ds_grid_set"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","ds_grid_set","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function can be used to set a given cell within the given DS grid to any value, which can be a real number or a string. The image below illustrates this:","\n  ","\n  ","\n  ","ds_grid_set(index, x, y, value);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","This index of the grid.","\n      ","\n      ","\n        ","x","\n        ","The x position of the cell to set.","\n      ","\n      ","\n        ","y","\n        ","The y position of the cell to set.","\n      ","\n      ","\n        ","value","\n        ","The value with which to set the cell.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","grid = ds_grid_create(5, 5);"," var i = 0;"," var j = 0;"," repeat (ds_grid_width(grid))","    {\n    ","    repeat (ds_grid_height(grid))","       {\n    ","       ds_grid_set(grid, i, j, irandom(9));","       j += 1;","       }\n    ","    j = 0;","    i += 1;"," }\n  ","\n  ","The above code creates a grid and stores its index in the variable \"grid\". It then populates this grid with random integers from 0 to 9.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_set_disk","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_grid_set"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2159"})