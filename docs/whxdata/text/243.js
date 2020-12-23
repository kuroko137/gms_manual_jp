rh._.exports({"0":["asset_remove_tags","asset_remove_tags"],"1":["asset_remove_tags,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence"],"2":["asset_remove_tags,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","asset_remove_tags","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can remove one or more tag strings to any asset from the asset browser. You supply either the asset name (as a string) or its asset index, as well as either a single tag string or an array where each item is a single tag string.\n    If you supply an asset index value, then you will need to supply the optional asset type argument (a constant), as assets of different types can have the same index, even though they cannot have the same name. The available asset types are listed\n    in the table below:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","asset_object","\n        ","The given name refers to an ","object",".","\n      ","\n      ","\n        ","asset_sprite","\n        ","The given name refers to a ","sprite",".","\n      ","\n      ","\n        ","asset_sound","\n        ","The given name refers to a ","sound",".","\n      ","\n      ","\n        ","asset_room","\n        ","The given name refers to a ","room",".","\n      ","\n      ","\n        ","asset_tiles","\n        ","The given name refers to a ","tile set",".","\n      ","\n      ","\n        ","asset_path","\n        ","The given name refers to a ","path",".","\n      ","\n      ","\n        ","asset_script","\n        ","The given name refers to a ","script",".","\n      ","\n      ","\n        ","asset_font","\n        ","The given name refers to a ","font",".","\n      ","\n      ","\n        ","asset_timeline","\n        ","The given name refers to a ","time line",".","\n      ","\n      ","\n        ","asset_shader","\n        ","The given name refers to a ","shader",".","\n      ","\n      ","\n        ","asset_animationcurve","\n        ","The given name refers to an ","Animation Curve",".","\n      ","\n      ","\n        ","asset_sequence","\n        ","The given name refers to a ","Sequence",".","\n      ","\n    ","\n  ","\n  "," ","\n  ","If the function succeeds in removing the tag(s) it will return ","true"," otherwise it will return ","false",".","\n  "," ","\n  "," ","\n  ","\n  ","asset_remove_tags(name_or_index, tags, [asset_type]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name_or_index","\n        ","The name of the asset (a string) or its index value (an integer).","\n      ","\n      ","\n        ","tags","\n        ","A single asset tag string or an array with various asset tags.","\n      ","\n      ","\n        ","[asset_type]","\n        ","OPTIONAL! The type of asset to remove the tags from, only used when supplying an index for the first argument.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var _a = array_create(3);"," _a[0] = \"enemy\";"," _a[1] = \"all_levels\";"," _a[2] = \"boss\";"," asset_remove_tags(obj_Enemy_Boss_Parent, _a, asset_object);","\n  ","The above code will create an array of tags and then remove them from the given object.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Assets And Tags","\n        ","Next: ","asset_has_tags","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["asset_remove_tags"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"243"})