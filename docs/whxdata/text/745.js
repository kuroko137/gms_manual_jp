rh._.exports({"0":["layer_sequence_speedscale","layer_sequence_speedscale"],"1":["layer_sequence_speedscale"],"2":["layer_sequence_speedscale"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","layer_sequence_speedscale","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can change the playback speed of the given sequence. You supply the sequence element ID as returned by ","layer_sequence_create()"," or by one of the ","layer element functions","    and then a speed scale value. This value is a ","multiplier",", where 1 is the default playback speed and values less than 1 will slow the playback and values larger than 1 will speed it up, eg: a value of 0.5 would be half playback speed, while\n    a value of 2 would be double playback speed.","\n  "," ","\n  ","\n  ","layer_sequence_speedscale(sequence_element_id, speedscale)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sequence_element_id","\n        ","The unique ID value of the sequence element to target","\n      ","\n      ","\n        ","speedscale","\n        ","The speed scale to use (a multiplier), default is 1","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var _seq = layer_sequence_create(\"Background\", 0, 0, seq_AnimatedBackground);"," layer_sequence_speedscale(_seq, 0.75);","\n  ","The above code creates a new sequence on the layer of the calling instance and then sets its speed scale value to 0.75 (three-quarters default playback speed).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_get_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sequence_speedscale"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"745"})