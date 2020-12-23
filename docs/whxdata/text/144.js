rh._.exports({"0":["ini_open","ini_open"],"1":["ini_open"],"2":["ini_open"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","ini_open","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This opens an ini_file for reading and/writing. If the ini_file does not exist at the location you are checking, GameMaker Studio 2 may create one, but only if you write data to it. If you have only read information from the ini file, then the\n    default values for the read function will be returned, but the ini file will ","not"," actually be created.","\n  ","Please note that you can only have ","one"," ini file open at any one time and remember to use ","ini_close()"," once you're finished reading/writing from the .ini file as the information is not actually stored to\n    disk until then (it is also stored in memory until the file is closed).","\n  ","WARNING!"," This function may not work as you expect due to GameMaker Studio 2 being sandboxed! Please see the section on the ","File System"," for more information.","\n  "," ","\n  ","\n  ","ini_open(name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","The filename for the .ini file.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","ini_open(\"Settings/savedata.ini\");"," score = ini_read_real(\"save1\", \"score\", 0);"," ini_close();\n  ","\n  ","This will open 'savedata.ini' and read the score value under the section \"save1\" with the key \"score\" in it, then close the .ini again. Should there be no value under \"save1\", \"score\" or there is no \"savedata.ini\"\n    file present, score will be set to 0 (the default value). Note that the ini file has been placed in the sub-directory \"Settings\", which is the folder that holds the ini file in the Asset Browser included files.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Ini Files","\n        ","Next: ","ini_close","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ini_open"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"144"})