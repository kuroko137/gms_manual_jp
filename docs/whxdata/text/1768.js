rh._.exports({"0":["steam_ugc_query_set_allow_cached_response","steam_ugc_query_set_allow_cached_response"],"1":["steam_ugc_query_set_allow_cached_response"],"2":["steam_ugc_query_set_allow_cached_response"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","steam_ugc_query_set_allow_cached_response","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function can be used to further filter any given UGC query, specifically to request that the query check the local cache rather than online. The query handle is the value returned when you created the query (using, for example, ","steam_ugc_create_query_user()",")\n    and the second argument is either ","true"," or ","false",". The function will return ","true"," if the query filter was correctly set, or ","false"," otherwise.","\n  "," ","\n  ","\n  ","steam_ugc_query_set_allow_cached_response(ugc_query_handle , cache);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ugc_query_handle","\n        ","The query handle to use.","\n      ","\n      ","\n        ","cache","\n        ","Whether to have the query check the local cache or not.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);"," steam_ugc_query_add_required_tag(query_handle, \"RPG\");"," steam_ugc_query_set_return_long_description(query_handle, true);"," steam_ugc_query_set_allow_cached_response(query_handle,\n    true);"," query_ID = steam_ugc_send_query(query_handle);","\n  ","The above code creates a query request and stores it's handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_ugc_send_query","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_ugc_query_set_allow_cached_response"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1768"})