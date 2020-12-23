rh._.exports({"0":["audio_create_play_queue","audio_create_play_queue"],"1":["audio_create_play_queue,audio_mono,audio_stereo,audio_3D"],"2":["audio_create_play_queue,audio_mono,audio_stereo,audio_3D"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","audio_create_play_queue","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function prepares a buffer queue for audio. You pass data format (only ","buffer_u8"," or ","buffer_s16"," are currently supported), the sample rate (which can be between 1000hz and 48000hz), and the channels that the audio requires from\n    one of the constants listed below:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","audio_mono","\n        ","Mono (single channel) audio.","\n      ","\n      ","\n        ","audio_stereo","\n        ","Stereo (dual channel) audio.","\n      ","\n      ","\n        ","audio_3D","\n        ","3D (5.1) audio.","\n      ","\n    ","\n  ","\n  "," Note that you should free up any audio queues created with this function when no longer required to prevent memory leaks using the function ","audio_free_play_queue()",".","\n  ","This function will trigger an ","Audio Playback Asynchronous Event"," when the queue has reached the end, and in this event a special ","DS map"," will\n    be created in the variable ","async_load"," with the following key/value pairs:","\n  ","\n    ","\"","queue_id","\" - the queue that has finished playing data","\n    ","\"","buffer_id","\" - the buffer that is no longer being played from","\n    ","\"","queue_shutdown","\" - this is set to 0 during normal playback and 1 when the event is received because ","audio_free_play_queue()"," has been called. When this is set to 1, you don't\n      want to queue up any further data.","\n  ","\n  "," ","\n  ","\n  ","audio_create_play_queue(queueFormat, queueRate, queueChannels);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","queueFormat","\n        ","The format of the buffer data to use (","buffer_u8"," or ","buffer_s16",").","\n      ","\n      ","\n        ","queueRate","\n        ","The sample rate of the data in the buffer queue.","\n      ","\n      ","\n        ","queueChannels","\n        ","The channels to use from one of the constants listed below.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (Buffer ID)","\n  "," ","\n  ","\n  ","audio_queue = audio_create_play_queue(buffer_s16, 11052, audio_mono);","\n  ","The above code creates a new audio queue and assigns its ID to a variable for future reference.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Buffers","\n        ","Next: ","audio_free_play_queue","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_create_play_queue"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"402"})