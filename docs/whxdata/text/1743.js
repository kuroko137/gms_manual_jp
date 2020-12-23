rh._.exports({"0":["steam_ugc_start_item_update","steam_ugc_start_item_update"],"1":["steam_ugc_start_item_update"],"2":["steam_ugc_start_item_update"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","steam_ugc_start_item_update","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function must be called before adding or updating information on a UGC item. You need to supply the unique App ID for your game on Steam, along with the unique published file ID that was returned for the item when you created it using the function\n    ","steam_ugc_create_item()",". The function will return a unique update handle for the item, which you can then use in the UGC item functions to update (or add) information for uploading.","\n  "," ","\n  ","\n  ","steam_ugc_start_item_update(consumer_app_id, published_file_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","consumer_app_id","\n        ","The unique App ID for your game on Steam.","\n      ","\n      ","\n        ","published_file_id","\n        ","The unique published file ID value for the item.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Handle","\n  "," ","\n  ","\n  ","var app_id = steam_get_app_id();"," var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);"," steam_ugc_set_item_title(updateHandle, \"My workshop item(3)!\");"," steam_ugc_set_item_description( updateHandle, \"testing\n    workshop...\");"," steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);"," var tagArray;"," tagArray[0] = \"Test\";"," tagArray[1] = \"New\";"," steam_ugc_set_item_tags(updateHandle, tagArray);"," steam_ugc_set_item_preview(updateHandle,\n    \"promo.jpg\");"," steam_ugc_set_item_content(updateHandle, \"WorkshopContent1\");"," requestId = steam_ugc_submit_item_update(updateHandle, \"Version 1.2\");","\n  ","The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various peices of information before the update is pushed to the Workshop\n    servers.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_ugc_set_item_title","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_ugc_start_item_update"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1743"})