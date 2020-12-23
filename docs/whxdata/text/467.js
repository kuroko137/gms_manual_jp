rh._.exports({"0":["shader_is_compiled","shader_is_compiled"],"1":["shader_is_compiled"],"2":["shader_is_compiled"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","shader_is_compiled","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will check a shader at run-time to make sure that it has been successfully compiled. If it has then the function returns ","true"," otherwise it returns ","false",". This function should be\n    used at the start of the game to make sure that the platform running your game has successfully compiled any shaders used (particularly on Windows where some computers may be using DX9 with Shader Level 2.0 and not a later version using shader level\n    3.0).","\n  ","If your shader has ","NOT"," been compiled and you call ","shader_set()"," the game will crash, so it is worth while having some sort of check whenever you are using\n    anything other than simple GLSL ES shaders.","\n  "," ","\n  ","\n  ","shader_is_compiled(shader);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","shader","\n        ","The shader to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","global.GFX = false;"," if (shader_is_compiled(sh_glass) && shader_is_compiled(sh_warp))","     {\n    ","     global.GFX = true;","     }\n  ","\n  ","The above code will set a global variable to ","false",", and then if both the shaders being checked have compiled correctly, it will be set to ","true",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n        ","Next: ","shaders_are_supported","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["shader_is_compiled"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"467"})