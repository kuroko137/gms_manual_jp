rh._.exports({"0":["json_stringify","json_stringify"],"1":["json_stringify"],"2":["json_stringify"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","json_stringify","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","With this function you can convert single or nested structs and arrays into a valid JSON string. You supply the initial value to use (an array index or a struct reference) and then the function will \"stringify\" it, converting it into a JSON string,\n    converting GameMaker arrays into JSON arrays, and GameMaker structs in to JSON objects.","\n  ","When using this function there are some important things to note:","\n  ","\n    ","The function will ","not "," convert DS maps, lists or any other data structure into JSON, and will simply store the internal index value for the structure (which is of little use as the index will change between runs of the game), and as such\n      you should not try to stringify any value that may contain references to data structures (for that you have ","json_encode()",").","\n    ","The function will convert just about any value into a \"valid\" JSON string, however the actual values contained in the string may not be exactly what you expect due to the way that the JSON standard operates:","\n      "," \"JSON is agnostic about numbers. In any programming language, there can be a variety of number types of various capacities and complements, fixed or floating, binary or decimal. That can make interchange between different programming\n      languages difficult. JSON instead offers only the representation of numbers that humans use: a sequence of digits. All programming languages know how to make sense of digit sequences even if they disagree on internal representations.\"","\n      "," For more information see the ","ECMA JSON Standard",".","\n    ","If you include an int64 in the values to convert to JSON it will write it as an ","int"," if it is in the valid range for an int32, as a ","double"," if it can do so without losing precision or (if neither of those cases is applicable) as a ","string","      with an identifier \"","@i64@","\" before it and \"","$i64$","\" after it. When you come to parse the JSON again GameMaker Studio 2 will pick these identifiers up and re-convert the value back into an int64. This does mean\n      that if the JSON is intended for a server or some other non-GameMaker target, these values will not be appropriate and so should be avoided.","\n    ","Care should be taken when writing any returned JSON string to an ","ini"," file, as the ","ini"," specifications can cause issues when using quotes and escape characters. See the function ","ini_write_string()","      for more information.","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n  ","json_stringify","(val)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","val","\n        ","The reference value for a struct or array to convert into a JSON string","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","string","\n  "," ","\n  ","\n  ","var _contents = {","     version : \"1\",","     data: {","         webSocket : 1,","         ipv4Address : \"95.39.220.218\",","         ipv6Address : \"0000:0000:0000:0000:0000:ffff:5f27:dcda\",","         header\n    : \"You are receiving a packet\",","         body : \"This packet is empty and only for testing\",","     },    "," };\n    "," packet = json_stringify(map);","\n  ","The above code will convert the \"_contents\" struct into a JSON string and store the string in a variable. The actual string would be  like this:","\n  ","{ \"version\": \"1\", \"myObj\": { \"header\": \"You are receiving a packet\", \"webSocket\": 1, \"body\": \"A packet of cheese and onion crisps\", \"ipv4Address\": \"95.39.220.218\",\n    \"ipv6Address\": \"0000:0000:0000:0000:0000:ffff:5f27:dcda\" } }","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Encoding","\n        ","Next: ","json_parse","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["json_stringify"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2618"})