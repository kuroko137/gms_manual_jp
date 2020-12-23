rh._.exports({"0":["gamepad_button_check_pressed","gamepad_button_check_pressed"],"1":["gamepad_button_check_pressed"],"2":["gamepad_button_check_pressed"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","gamepad_button_check_pressed","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will return ","true"," or ","false"," depending on whether the given gamepad button is detected as having been pressed or not. Note that this function will only trigger ","once"," for the button the first time it is pressed. For\n    it to trigger again the button must first be released and then re-pressed. If you need to check a continuous press of the button you should be using the function ","gamepad_button_check()",".","\n  ","If you are checking an analogue button, then the check will take into consideration the ","threshold setting"," and only return ","true"," when the raw input value goes over the given threshold\n    (you can get this raw value using the function ","gamepad_button_value()",").","\n  "," ","\n  ","\n  ","gamepad_button_check_pressed(device, button);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Which gamepad device \"slot\" to check.","\n      ","\n      ","\n        ","button","\n        ","Which gamepad button ","constant"," to check for.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if gamepad_button_check_pressed(0, gp_start)","    {\n    ","    audio_play_sound(snd_Start, 0, false);","    room_goto(rm_Level_1);\n    ","    }\n  ","\n  ","The above code will detect whether the \"start\" button of the gamepad connected to device \"slot\" 0 has been pressed or not and change room if it has.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: "," gamepad_button_check_released ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_button_check_pressed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1246"})