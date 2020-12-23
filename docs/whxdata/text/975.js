rh._.exports({"0":["surface_get_width","surface_get_width"],"1":["surface_get_width"],"2":["surface_get_width"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","surface_get_width","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function simply returns the width, in pixels, of the indexed surface. It should be noted that if you call this to check the ","application_surface"," immediately after having changed its size using ","surface_resize()","    it will not return the new value as the change needs a step or two to be fully processed. After waiting a step it should return the new size correctly.","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()","    before referencing them directly.","\n  "," ","\n  ","\n  ","surface_get_width(surface_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","surface_id","\n        ","The ID of the surface to get the width of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","sw = surface_get_width(surf);","\n  ","The above code will store the width of the surface indexed in the variable \"surf\" in the variable \"sw\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_get_texture","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["surface_get_width"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"975"})