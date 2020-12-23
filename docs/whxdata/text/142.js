rh._.exports({"0":["File Handling","File Handling"],"2":["File Handling"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","File Handling","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","At some point while creating your game it will be necessary to store information externally and be able to retrieve this information. For example, you may wish to store login details, or hi-scores, or maybe the progression of the player through your\n    levels. Whatever the reason, you will need to know how to use the different file functions that are available to you when working with GameMaker Studio 2.","\n  ","It is very important to realise that GameMaker Studio 2 is ","Sandboxed ","by default, meaning that there are a number of limits and minor complications when using the file system functions that are available, and it is worth noting too that\n    the file system will work slightly differently depending on the platform you are targeting. For more information this, please see the following section:","\n  ","\n    ","The File System","\n  ","\n  ","You can turn off sandboxing on the desktop targets (Windows, macOS and Ubuntu (Linux)) from the Game Options for the chosen platform, meaning that you can then save and load from anywhere, within the limits of the OS permissions.","\n  ","If you have been granted permission by Steam to use their dedicated API with your game, you will find that there is also a new set of file functions available to you. These are explained in the ","Steam API"," section of this\n    manual.","\n  ","Finally, you should also note that there are some distinct differences between certain target platforms which would be taken into account when using the file functions. These are:","\n  ","\n    ","iOS",": On iOS, if you are loading an included file from a folder, ie: with a path something like \"","Backgrounds/background1.png","\", you do NOT need to include the folder as part of the path and simply supplying the file name is\n      sufficient. On all other platforms you must supply the folder(s) as part of the path to the file.","\n    ","macOS and Ubuntu (Linux)",": On the macOS and Ubunutu, filenames and paths are case sensitive on these platforms, and so to prevent any potential issues, GameMaker Studio 2 will automatically make all names/paths use lower case by default.","\n    ","HTML5",": On HTML5, saving and loading to and from ","local storage"," will work as explained within the different function pages, however if you are loading a file from a server, you ","must only use the function ","buffer_load_async()","      as loading synchronously has been deprecated on most browsers and will eventually be obsoleted.","\n  ","\n  ","Information on the different file functions can be found in the following pages:","\n  "," ","\n  ","\n    ","File System","\n    ","Ini Files","\n    ","Text Files","\n    ","Binary Files","\n    ","File Directories","\n  ","\n  "," ","\n  ","GameMaker Studio 2 also includes a number of functions for ","encoding"," and ","hashing"," files and data, which you can find here:","\n  "," ","\n  ","\n    ","Encoding And Hashing","\n  ","\n  "," ","\n  ","Also note that there are some basic file functions for saving games available from the following pages (be aware that these functions are designed for beginners to get a basic save system up and running as quickly as possible, but for more complex projects,\n    you should create your own save system using the functions listed in the sections above):","\n  "," ","\n  ","\n    ","game_load","\n    ","game_load_buffer","\n    ","game_save","\n    ","game_save_buffer","\n  ","\n  "," ","\n  ","Finally you can find more advanced ","buffer"," functions that can be used for loading and saving data on the following pages:","\n  "," ","\n  ","\n    ","buffer_save","\n    ","buffer_save_ext","\n    ","buffer_save_async","\n    ","buffer_load","\n    ","buffer_load_ext","\n    ","buffer_load_async","\n    ","buffer_load_partial","\n    ","buffer_async_group_begin","\n    ","buffer_async_group_option","\n    ","buffer_async_group_end","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Reference","\n        ","Next: ","Buffers","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["File Handling"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"142"})