rh._.exports({"0":["sprite_get_tpe","sprite_get_tpe"],"1":["sprite_get_tpe"],"2":["sprite_get_tpe"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","sprite_get_tpe","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will return a special value that relates to the position of the given sprite and sub-image on the texture page used by your game. In this way you can pass the value to extensions for use outside of the compiled game, effectively bypassing\n    the GameMaker Studio 2 drawing functions and permitting the sprite to be used in DOM content which can then be drawn anywhere within the window that contains the game canvas. This function is of particular interest to those that wish to create buttons\n    and other interactive media outside of the GameMaker Studio 2 canvas element on their host page using the function ","clickable_add()",".","\n  ","NOTE",": This function is for HTML5 only.","\n  "," ","\n  ","\n  ","sprite_get_tpe(sprite, index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to find the texture page entry of.","\n      ","\n      ","\n        ","index","\n        ","The image index of the sprite.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","home_but = clickable_add(32, 32, sprite_get_tpe(spr_MS_Home, 0), \"http://macsweeney_games.com\", \"_blank\", \"width=700, height=500, menubar=0, toolbar=0, scrollbars=0\");","\n  ","The above code creates a DOM button at the position (32, 32) of the page that the game canvas is running on. The button uses the sprite referenced from the texture page as \"spr_MS_Home\" and when clicked the button will open a new window for\n    the specified URL and with the defined properties for that window.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Information","\n        ","Next: ","sprite_get_texture","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_get_tpe"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"262"})