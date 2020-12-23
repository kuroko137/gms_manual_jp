rh._.exports({"0":["move_random","move_random"],"1":["move_random"],"2":["move_random"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","move_random","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can set the instance to a position anywhere in the room, but aligned to an \"invisible\" grid. So a value of 32 for the hsnap and vsnap will set the instance to a random position that is aligned to a grid of 32x32 squares.\n    you can set these values to 1 to get a position anywhere in the room.","\n  ","NOTE",": This function will snap to the same positions every time the game is run afresh due to the fact that GameMaker Studio 2 generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour\n    use ","randomise()"," at the start of your game. This is only true when testing and debugging the game, as the final\n    executable package will not show this behaviour and will be random every play.","\n  "," ","\n  ","\n  ","move_random(hsnap, vsnap);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","hsnap","\n        ","The horizontal snapping (the size in pixels between 'cells').","\n      ","\n      ","\n        ","vsnap","\n        ","The vertical snapping (the size in pixels between 'cells').","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if keyboard_check(vk_space)","     {","     move_random(1,1);","     }","\n  ","This will move the instance to a random position anywhere in the room when the space key is pressed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","move_snap","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["move_random"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"785"})