rh._.exports({"0":["ds_list_mark_as_list","ds_list_mark_as_list"],"1":["ds_list_mark_as_list"],"2":["ds_list_mark_as_list"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","ds_list_mark_as_list","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will \"mark\" (or \"flag\") a given position within a previously created DS list as holding another DS list. This functionality is required when encoding JSON strings (which you can create using ","json_encode()","),\n    but can also be useful when nesting data-structures, as items marked in this way will automatically be garbage collected (destroyed) when the parent DS list is destroyed. This means that you do not have to manually go through the list contents and\n    destroy the marked data structures individually before destroying the \"parent\" list. However, if you delete the list position individually, the DS list it contained will ","not"," be garbage collected and you should call the appropriate\n    DS list destroy function before deleting the item from the parent list position. Also note that if you call the function ","ds_list_clear()"," on a list, any items flagged as lists will be destroyed as well when\n    the list is cleared.","\n  ","It is also worth noting that if the position that has been marked changes within the list, the \"mark\" will move with it, so if you have marked position 3 in the list (for example) and then insert 2 more items below it so it moves up to position\n    5, it will ","still"," be marked as a list.","\n  "," ","\n  ","\n  ","ds_list_mark_as_list(id, pos);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the list to mark.","\n      ","\n      ","\n        ","pos","\n        ","The position within the list to mark.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (integer - ID of the DS list if successful or -1 if it fails)","\n  "," ","\n  ","\n  ","var j_list = ds_list_create();"," var sub_list = ds_list_create();"," ds_list_add(sub_list, health);"," ds_list_add(sub_list, lives);"," ds_list_add(sub_list, score);"," ds_list_add(j_list, sub_list);"," ds_list_mark_as_list(j_list, 0);","\n  ","The above code creates two DS list, then populates one with various values from global variables. This list is then added into the second list, and the position \"marked\" as such so that it can be correctly encoded later.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Lists","\n        ","Next: ","ds_list_mark_as_map","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_list_mark_as_list"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1300"})