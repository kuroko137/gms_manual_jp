rh._.exports({"0":["audio_queue_sound","audio_queue_sound"],"1":["audio_queue_sound"],"2":["audio_queue_sound"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","audio_queue_sound","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function will add the data from a buffer into the audio queue that you previously created using the function ","audio_create_play_queue()",". You specify the queue index to add to, and the\n    buffer ID to get the data from as well as the position (offset) within the buffer and the number of bytes to add. Once you have added audio from a buffer to a queue, the buffer cannot be deleted until you have first freed the queue using the function \n    ","audio_free_play_queue()",", and the buffer properties should match those of the the queue that you are adding the sound to.","\n  "," ","\n  ","\n  ","audio_queue_sound(queueIndex, bufferId, bufferOffset, bufferLength);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","queueIndex","\n        ","The index of the queue to add to.","\n      ","\n      ","\n        ","bufferId","\n        ","The buffer to add to the queue.","\n      ","\n      ","\n        ","bufferOffset","\n        ","The offset within the source buffer to start from.","\n      ","\n      ","\n        ","bufferLength","\n        ","The length of the buffer (the number of the bytes in the buffer).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","len = async_load[? \"data_len\"];"," audio_buff = buffer_create(len, buffer_fast, 1);"," buffer_copy(async_load[? \"buffer_id\"], 0, len, buff, 0);"," audio_queue_sound(audio_queue, audio_buff, 0, len);"," audio_play_sound(audio_queue,\n    10, 0);","\n  ","The above code would be called in the asynchronous ","Audio Recording"," event and assigns some recorded data to a buffer, which is\n    then added to an audio queue. This is then played.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Buffers","\n        ","Next: ","audio_start_recording","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_queue_sound"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"404"})