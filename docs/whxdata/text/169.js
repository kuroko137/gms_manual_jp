rh._.exports({"0":["argument","argument"],"1":["argument[n],argument0 - argument15"],"2":["argument"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","argument","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This variable holds an ","array"," that is used along with the read-only variable ","argument_count"," in ","script functions"," or ","methods",".\n    Each array position holds an input value for the function and is specifically for use with ","variable ","argument functions.","\n  ","Note that there are also a series of independent global scope variables that can also be used in user-defined functions to reference the different input arguments: ","argument0",", ","argument1",", ","argument2",",\n    etc... up to ","argument15",", but these variables can only be used when the number of arguments supplied to the user-defined function are ","fixed ","and not variable.","\n  ","NOTE",": This isn't strictly required any more and is provided for legacy support more than anything else. All user-defined functions will accept variable arguments, and any argument passed into a function that is not part of the named\n    inputs will be initialised to ","undefined"," by default, which can be checked using the ","is_undefined()"," function.","\n  "," ","\n  ","\n  ","argument[","n","]"," argument1\n    "," argument2\n    "," ...\n    "," argument15\n  ","\n  "," ","\n  ","\n  ","Value (can be of any ","data type"," supplied to the function)","\n  "," ","\n  ","\n  ","function my_array()"," {\n    "," var i, arg;"," for (i = 0; i < 5; i += 1;)","    {\n    ","    if argument_count > i","       {\n    ","       arg[i] = argument[i]","       }\n    ","    else\n    ","       {\n    ","       arg[i] = -1;","       }\n    ","    }\n    "," }\n  ","\n  ","The above code uses the ","argument_count"," variable along with the ","argument"," array to initialize variables, and is an example of how to permit a user-defined function to accept a variable number of arguments.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Global Variables","\n        ","Next: ","argument_count","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["argument"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"169"})