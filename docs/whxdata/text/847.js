rh._.exports({"0":["gpu_get_texrepeat_ext","gpu_get_texrepeat_ext"],"1":["gpu_get_texrepeat_ext"],"2":["gpu_get_texrepeat_ext"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","gpu_get_texrepeat_ext","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can check to see whether texture repeating is enabled (returns ","true",") or not (returns ","false",") for a given shader sampler texture.","\n  "," ","\n  ","\n  ","gpu_get_texrepeat_ext(sampler_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sampler_id","\n        ","The sampler id from the shader.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var s_tex = shader_get_sampler_index(shader_glass, \"s_NoiseSampler\");"," if !gpu_get_texrepeat_ext(s_tex)","     {\n    ","     gpu_set_texrepeat_ext(s_tex, true);","     }\n  ","\n  ","The above code checks to see if texture filtering off for a specific sampler ID (stored in a local variable) and switches it on if it's not.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_set_blendenable","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_get_texrepeat_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"847"})