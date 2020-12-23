rh._.exports({"0":["asset_has_any_tag","asset_has_any_tag"],"1":["asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_has_any_tag"],"2":["asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_has_any_tag"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","asset_has_any_tag","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can check to see if one or more tag strings is assigned to any asset from the asset browser. You supply either the asset name (as a string) or its asset index, as well as either a single tag string or an array where each item\n    is a single tag string. If you supply an asset index value, then you will need to supply the optional asset type argument (a constant), as assets of different types can have the same index, even though they cannot have the same name. The available\n    asset types are listed in the table below:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","asset_object","\n        ","The given name refers to an ","object",".","\n      ","\n      ","\n        ","asset_sprite","\n        ","The given name refers to a ","sprite",".","\n      ","\n      ","\n        ","asset_sound","\n        ","The given name refers to a ","sound",".","\n      ","\n      ","\n        ","asset_room","\n        ","The given name refers to a ","room",".","\n      ","\n      ","\n        ","asset_tiles","\n        ","The given name refers to a ","tile set",".","\n      ","\n      ","\n        ","asset_path","\n        ","The given name refers to a ","path",".","\n      ","\n      ","\n        ","asset_script","\n        ","The given name refers to a ","script",".","\n      ","\n      ","\n        ","asset_font","\n        ","The given name refers to a ","font",".","\n      ","\n      ","\n        ","asset_timeline","\n        ","The given name refers to a ","time line",".","\n      ","\n      ","\n        ","asset_shader","\n        ","The given name refers to a ","shader",".","\n      ","\n      ","\n        ","asset_animationcurve","\n        ","The given name refers to an ","Animation Curve",".","\n      ","\n      ","\n        ","asset_sequence","\n        ","The given name refers to a ","Sequence",".","\n      ","\n    ","\n  ","\n  "," ","\n  ","If the function succeeds and one or more of the tag(s) is present for the asset then it will return ","true"," otherwise it will return ","false",". If you need to check for a precise match to any given tag or set of tags, then use the function\n    ","asset_has_tags()",".","\n  "," ","\n  "," ","\n  ","\n  ","asset_has_any_tag(name_or_index, tags, [asset_type]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name_or_index","\n        ","The name of the asset (a string) or its index value (an integer).","\n      ","\n      ","\n        ","tags","\n        ","A single asset tag string or an array with various asset tags.","\n      ","\n      ","\n        ","[asset_type]","\n        ","OPTIONAL! The type of asset to check the tags for, only used when supplying an index for the first argument.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var _a = array_create(3);"," _a[0] = \"boss\";"," _a[1] = \"main_boss\";"," _a[2] = \"final_boss\";"," if asset_has_any_tag(object_index, _a, asset_object)"," {\n    "," instance_create_layer(0, 0, \"Overlay\", obj_Boss_Text);"," }\n  ","\n  ","The above code will create an array of tags and then check to see if any of them are applied to the given object, and if they are it will create an instance of another object.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Assets And Tags","\n        ","Next: ","asset_clear_tags","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["asset_has_tags"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"248"})