rh._.exports({"0":["mp_grid_create","mp_grid_create"],"1":["mp_grid_create"],"2":["mp_grid_create"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","mp_grid_create","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can create an mp_grid for the motion planning functions. It returns an index that should be stored in a variable for use in all the other MP grid function calls. The x and y coordinates indicate the position of the top-left corner\n    of the grid, hcells and vcells indicate the number of horizontal and vertical cells to be created within the grid, and cell width and cell height indicate the size of the cells in pixels. You can create and maintain multiple grid structures at the\n    same moment if you need them for different things, but be aware that each grid will require memeory, and the more cells they have the more memory they will require. Also note that the MP functions are quite processor heavy to use so the more often\n    you call them and the higher the cell resolution then the more likely you are to have a drop in performance.","\n  "," ","\n  ","\n  ","mp_grid_create(left, top, hcells, vcells, cellwidth, cellheight):","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","left","\n        ","Starting x coordinate of the mp_grid in the room","\n      ","\n      ","\n        ","top","\n        ","Starting y coordinate of the mp_grid in the room","\n      ","\n      ","\n        ","hcells","\n        ","Number of horizontal cells that the mp_grid will contain","\n      ","\n      ","\n        ","vcells","\n        ","Number of vertical cells that the mp_grid will contain","\n      ","\n      ","\n        ","cellwidth","\n        ","The width (in pixels) of each individual cell of the mp_grid","\n      ","\n      ","\n        ","cellheight","\n        ","The height (in pixels) of each individual cell of the mp_grid","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","global.grid = mp_grid_create(0, 0, room_width / 32, room_height /32, 32, 32);","\n  ","The above code creates a global variable \"grid\", then generates an mp_grid and assigns its index (id) to that variable for use in all further mp_grid function calls. The grid covers the room, with a cell resolution of 32x32 pixels. This means\n    that, for example, in a room that is 640x480, the grid would contain 300 cells: 20 horizontal cells (640 / 32) multiplied by 15 vertical cells (480 /32) gives 300 cells","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_grid_destroy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["mp_grid_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"798"})