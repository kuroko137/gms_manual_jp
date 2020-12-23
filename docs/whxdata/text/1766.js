rh._.exports({"0":["steam_ugc_query_set_return_total_only","steam_ugc_query_set_return_total_only"],"1":["steam_ugc_query_set_return_total_only"],"2":["steam_ugc_query_set_return_total_only"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","steam_ugc_query_set_return_total_only","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This function can be used to further filter any given UGC query, specifically to request only the number of results without any other information (meaning that the DS map generated by the send function will contain the key \"num_results\" without\n    any further map data). The query handle is the value returned when you created the query (using, for example, ","steam_ugc_create_query_user()",") and the second argument is either ","true"," or\n    ","false",". The function will return ","true"," if the query filter was correctly set, or ","false"," otherwise.","\n  "," ","\n  ","\n  ","steam_ugc_query_set_return_total_only(ugc_query_handle , total_only);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ugc_query_handle","\n        ","The query handle to use.","\n      ","\n      ","\n        ","total_only","\n        ","Whether to have the query return only the total number of hits or not.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);"," steam_ugc_query_set_return_total_only(query_handle, true);"," steam_ugc_query_set_allow_cached_response(query_handle, true);"," query_ID = steam_ugc_send_query(query_handle);","\n  ","The above code creates a query request and stores it's handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_ugc_query_set_allow_cached_response","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_ugc_query_set_return_total_only"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1766"})