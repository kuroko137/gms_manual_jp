rh._.exports({"0":["part_type_colour_hsv","part_type_colour_hsv"],"1":["part_type_colour_hsv,part_type_color_hsv"],"2":["part_type_colour_hsv,part_type_color_hsv"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","part_type_colour_hsv","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can set a hue, saturation and value range for all particles of the given type. You supply a minimum value and a maximum value for each of the three components and the particles created will have a random colour based on the given\n    range of parameters. In this way you can create particles of the same hue but different saturations, or of different hues but the same value (luminosity) etc... All values must be between 0 and 255.","\n  "," ","\n  ","\n  ","part_type_colour_hsv(ind, hmin, hmax, smin, smax, vmin, vmax);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the particle type to change.","\n      ","\n      ","\n        ","hmin","\n        ","The minimum the final colour's hue component can be.","\n      ","\n      ","\n        ","hmax","\n        ","The maximum the final colour's hue component can be.","\n      ","\n      ","\n        ","smin","\n        ","The minimum the final colour's saturation component can be.","\n      ","\n      ","\n        ","smax","\n        ","The maximum the final colour's saturation component can be.","\n      ","\n      ","\n        ","vmin","\n        ","The minimum the final colour's value component can be.","\n      ","\n      ","\n        ","vmax","\n        ","The maximum the final colour's value component can be.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","part_type_hsv(global.Stars, 0, 255, 0, 255, 255, 255 );","\n  ","The above code sets each particle emitted of the particle type indexed in the global variable \"Stars\" to have different colours and saturations, but the same value (luminosity).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Types","\n        ","Next: ","part_type_colour1","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_type_colour_hsv"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1034"})