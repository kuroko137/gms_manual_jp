rh._.exports({"0":["keyboard_check_pressed","keyboard_check_pressed"],"1":["keyboard_check_pressed"],"2":["keyboard_check_pressed"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","keyboard_check_pressed","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n\n\n\n  ","\n  ","\n  ","With this function you can check to see if a key has been pressed or not. Unlike the ","keyboard_check()"," function, this function will only run once for every time the key is pressed down, so for it to trigger again,\n    the key must be first released and then pressed again. The function will take a keycode value as returned by the function ","ord()"," (only ","capital"," letters from A-Z or numbers from 0-9), or any of the\n    ","vk_*"," constants listed on the main ","Keyboard Input"," page.","\n  "," ","\n  ","\n  ","keyboard_check_pressed(key);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","key","\n        ","The key to check the pressed state of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if keyboard_check_pressed(vk_anykey)","    {\n    ","    room_goto_next();\n    ","    }\n  ","\n  ","The above code will advance to the next room if the player presses any of the keyboard's keys (working like a \"Press Any Key to Continue\" prompt).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Keyboard Input","\n        ","Next: ","keyboard_check_released","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["keyboard_check_pressed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1173"})