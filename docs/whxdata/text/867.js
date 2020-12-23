rh._.exports({"0":["gpu_get_tex_mip_bias","gpu_get_tex_mip_bias"],"1":["gpu_get_tex_mip_bias"],"2":["gpu_get_tex_mip_bias"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","gpu_get_tex_mip_bias","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can retrieve the mipmap bias value, where a value of 0 equals no bias, 1 equals the first mipmap, 2 equals the second mipmap etc... This controls the rate at which the mip map is swapped and will generally make rendered textures\n    blurrier the higher the value and the greater the \"distance\" being viewed. Note that this can return negative values too, in which case rendered textures will be sharper over a greater distance the lower the value.","\n  "," ","\n  ","\n  ","gpu_get_tex_mip_bias();","\n  "," ","\n  ","\n  ","Real (default: 0)","\n  "," ","\n  ","\n  ","if gpu_get_tex_mip_bias() != 0","     {\n    ","     gpu_set_tex_mip_bias(0);\n    ","     }\n  ","\n  ","The above code will check the current mipmap bias and if it is not 0 it is set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_get_tex_mip_bias_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_get_tex_mip_bias"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"867"})