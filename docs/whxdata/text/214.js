rh._.exports({"0":["array_height_2d","array_height_2d"],"1":["array_height_2d (Deprecated)"],"2":["array_height_2d"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","array_height_2d","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","\n  ","With this function you can get the height (number of entries) of a the first dimension of a 2D array. You supply the array to check and the output from the function tells you how many initial entries it contains. You can get the number of entries for\n    the second dimension of the array using the function ","array_length_2d",".","\n  "," ","\n  ","\n  ","array_height_2d(array_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","array_index","\n        ","The index of the array to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","for (var i = 0; i < array_height_2d(a); ++i;)","    {\n    ","    for (var j = 0; j < array_length_2d(a, i); ++j;)","       {\n    ","       a[i, j] = -1;","       }\n    ","    }\n  ","\n  ","The above code will loop through a 2D array and set each entry to -1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","method","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["array_height_2d (","Deprecated",")"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"8":["WARNING!"," This function is deprecated as arrays are no longer limited to only 1 or 2 dimensions, and as such this function is only supplied for support of legacy projects. All new projects should use the current way of creating and accessing multi-dimension\n    arrays (see ","here"," for more information)."],"id":"214"})