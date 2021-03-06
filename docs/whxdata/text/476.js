rh._.exports({"0":["sequence_keyframe_new","sequence_keyframe_new"],"1":["sequence_keyframe_new"],"2":["sequence_keyframe_new,seqtracktype_graphic,seqtracktype_audio,seqtracktype_instance,seqtracktype_sequence,seqtracktype_clipmask,seqtracktype_clipmask_mask,seqtracktype_clipmask_subject,seqtracktype_group,seqtracktype_colour,seqtracktype_real,seqtracktype_message,seqtracktype_moment,seqtracktype_bool,seqtracktype_string,seqtracktype_spriteframes,seqtracktype_empty"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","sequence_keyframe_new","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can create a new track keyframe ","struct",", supplying the type of track that the keyframe will be applied to, which will be one of the following constants:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Value","\n      ","\n      ","\n        ","seqtracktype_graphic","\n        ","This is a graphics (sprite) asset track.","\n        ","1","\n      ","\n      ","\n        ","seqtracktype_audio","\n        ","This is an audio asset track.","\n        ","2","\n      ","\n      ","\n        ","seqtracktype_instance","\n        ","This is an instance asset track.","\n        ","14","\n      ","\n      ","\n        ","seqtracktype_sequence","\n        ","This is a sequence asset track.","\n        ","7","\n      ","\n      ","\n        ","seqtracktype_clipmask","\n        ","This is a clip mask group asset track.","\n        ","8","\n      ","\n      ","\n        ","seqtracktype_clipmask_mask","\n        ","This is a clip mask sprite asset track used for generating the clip mask.","\n        ","9","\n      ","\n      ","\n        ","seqtracktype_clipmask_subject","\n        ","This is a clip mask sprite asset track that is being masked.","\n        ","10","\n      ","\n      ","\n        ","seqtracktype_group","\n        ","This group folder asset track.","\n        ","11","\n      ","\n      ","\n        ","seqtracktype_colour","\n        ","This is a colour data parameter track.","\n        ","4","\n      ","\n      ","\n        ","seqtracktype_real","\n        ","This is a real number value parameter track.","\n        ","3","\n      ","\n      ","\n        ","seqtracktype_message","\n        ","This is a broadcast message track.","\n        ","15","\n      ","\n      ","\n        ","seqtracktype_moment","\n        ","This is an event/moment track.","\n        ","16","\n      ","\n      ","\n        ","seqtracktype_bool","\n        ","Not used currently.","\n        ","5","\n      ","\n      ","\n        ","seqtracktype_string","\n        ","Not used currently.","\n        ","6","\n      ","\n      ","\n        ","seqtracktype_spriteframes","\n        ","Not used currently.","\n        ","13","\n      ","\n      ","\n        ","seqtracktype_empty","\n        ","Not used currently.","\n        ","12","\n      ","\n    ","\n  ","\n  "," ","\n  ","The function will return a ","track keyframe struct"," which can then have data added to it before being assigned to a ","track struct",".","\n  "," ","\n  ","\n  ","sequence_keyframe_new(type);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","The type of keyframe to create, a constant, listed above.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Struct","\n  "," ","\n  ","\n  ","myseq = sequence_create();"," var mytracks = array_create(1);"," mytracks[0] = sequence_track_new(seqtracktype_graphic);"," var graphickeys = array_create(1);"," graphickeys[0] = sequence_keyframe_new(seqtracktype_graphic);"," graphickeys[0].frame\n    = 0;"," graphickeys[0].length = 1;"," graphickeys[0].stretch = true;"," graphickeys[0].disabled = false;"," var graphickeydata = array_create(1);"," graphickeydata[0] = sequence_keyframedata_new(seqtracktype_graphic);"," graphickeydata[0].spriteIndex\n    = spr_Platform;"," graphickeydata[0].channel = 0;"," graphickeys[0].channels = graphickeydata;"," mytracks[0].name = \"TestGraphicTrack\";"," mytracks[0].keyframes = graphickeys;"," myseq.tracks = mytracks;","\n  ","The above code creates a new sequence and then creates a graphic asset track and sets some keyframe data on the track. This track is then assigned to the instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","sequence_keyframedata_new","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sequence_keyframe_new"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"476"})