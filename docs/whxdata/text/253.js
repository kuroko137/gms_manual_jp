rh._.exports({"0":["animcurve_channel_new","animcurve_channel_new"],"1":["animcurve_channel_new,animcurvetype_linear,animcurvetype_catmullrom"],"2":["animcurve_channel_new,animcurvetype_linear,animcurvetype_catmullrom"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","animcurve_channel_new","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function can be used to create a new animation curve channel ","struct",". A channel struct has the following variables:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Variable Name","\n        ","Data Type","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","string","\n        ","This is the name of the channel.","\n      ","\n      ","\n        ","type","\n        ","constant","\n        ","This will be one of the constants ","animcurvetype_linear"," - for linear interpolation between points - or ","animcurvetype_catmullrom"," - for \"smooth\" interpolation between the points using catmull-rom interpolation.","\n      ","\n      ","\n        ","iterations","\n        ","integer","\n        ","If the channel is using catmull-rom (\"smooth\") interpolation this holds how many points have been generated for each segment of the curve (note that these extra points are internal to the function and only used for the runtime calculations).\n          If the channel is using linear interpolation, this value will still exist but can be ignored as it has no bearing on how the curve is interpolated.","\n      ","\n      ","\n        ","points","\n        ","array pointer","\n        ","This is an array, where each item in the array is a point struct.","\n      ","\n    ","\n  ","\n  "," By default when you create a new channel struct, the \"name\" variable will be an empty string, the \"type\" will be ","animcurvetype_linear"," and the \"iterations\" will be 16. All these variables can be set to the\n    values that you require (note that the \"iterations\" value has no effect on linear curve types). Once created you need to add points to the curve, which is done by adding different point structs to the \"points\" ","array",".\n    These point structs can be created using the function ","animcurve_point_new()",", and hold the following variables:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Variable Name","\n        ","Data Type","\n        ","Description","\n      ","\n      ","\n        ","posx","\n        ","real","\n        ","The position in time (normalised from 0 to 1) of the point.","\n      ","\n      ","\n        ","value","\n        ","real","\n        ","The value of the point.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","animcurve_channel_new();","\n  "," ","\n  ","\n  ","Struct Reference","\n  "," ","\n  ","\n  ","my_curve = animcurve_create();"," my_curve.name = \"My_Curve\";"," var _channels = array_create(1);"," _channels[0] = animcurve_channel_new();"," _channels[0].name = \"alpha\";"," _channels[0].type = animcurvetype_catmullrom;","    _channels[0].iterations = 8;"," var _points = array_create(3);"," _points[0] = animcurve_point_new();"," _points[0].posx = 0;"," _points[0].value = 0;"," _points[1] = animcurve_point_new();"," _points[1].posx = 0.5;"," _points[1].value\n    = 1;"," _points[2] = animcurve_point_new();"," _points[2].posx = 1;"," _points[2].value = 0;"," _channels[0].points = _points;"," my_curve.channels = _channels;","\n  ","The above code creates a new animation curve struct and stores it in the variable \"my_curve\". This struct is then populated with a name and a channel array. The channel array contains a single channel with three points.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Animation Curves","\n        ","Next: ","animcurve_point_new","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["animcurve_channel_new"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"253"})