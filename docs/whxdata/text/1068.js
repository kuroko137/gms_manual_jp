rh._.exports({"0":["texturegroup_get_sprites","texturegroup_get_sprites"],"1":["texturegroup_get_sprites"],"2":["texturegroup_get_sprites"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","texturegroup_get_sprites","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can retrieve the sprite index of each of the sprites assigned to texture pages within the given texture group. You supply the texture group ID string (as defined in the texture Group Editor) and the function will return a 1D array\n    where each entry contains the sprite index for a sprite resource. If the function fails - ie: an invalid group is given, or the group has no texture assigned to it - then the array will be empty (0 length).","\n  "," ","\n  ","\n  ","texturegroup_get_sprites(tex_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tex","\n        ","The name of the texture group to check (a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","1D array","\n  "," ","\n  ","\n  ","var _tex_array = texturegroup_get_sprites( \"MainMenu\");"," for (var i = 0; i < array_length(_tex_array); ++i;)","     {\n    ","     show_debug_message(\"Sprite \" + string(i) + \" Index:\" + string(tex_array[i]));","     }\n  ","\n  ","The above code will retrieve the sprite indexes for the texture group \"MainMenu\", then display those IDs in the console output window.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","texturegroup_get_fonts","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["texturegroup_get_sprites"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1068"})