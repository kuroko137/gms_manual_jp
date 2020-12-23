rh._.exports({"0":["dot_product","dot_product","dot_product"],"1":["dot_product"],"2":["dot_product"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","dot_product","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","dot_product","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n\n\n\n\n  ","\n  ","\n  ","The dot product is a value expressing the angular relationship between two vectors and is found by taking two vectors, multiplying them together and then adding the results. The name \"dot product\" is derived from the centered dot \"·\"\n    that is often used to designate this operation (the alternative name \"scalar product\" emphasizes the scalar rather than vector nature of the result).","\n  ","The actual mathematical formula can be written like this:","\n  ","\n  ","So, in 2D the dot product of vectors ","a[x1,y1]"," and ","b[x2,2]"," is ","x1x2 + y1y2",", meaning that the dot_product in GameMaker Studio 2 is calculated as:","\n  ","a · b = (x1*x2)+(y1*y2);","\n  ","The curious thing about the dot product is the relationship it has to the angle formed by the input vectors which can be expressed as:","\n  ","a · b = (length of a) * (length of b) * cos(angle)","\n  ","That is to say, the dot product of two vectors will be equal to the cosine of the angle between those vectors, multiplied by the lengths of each of them. Here is an image to illustrate:","\n  ","\n  ","NOTE",": For more information on vectors, see ","here",".","\n  ","There are a few things that we can now state from any two vectors in relation to the result of their dot product:","\n  ","\n    ","If a and b are perpendicular (at 90 degrees to each other), the result of the dot product will be zero, because ","cos(ang)"," will be zero","\n    ","If the angle between a and b are less than 90 degrees, the dot product will be positive (greater than zero), as ","cos(ang)"," will be positive","\n    ","If the angle between a and b are greater than 90 degrees, the dot product will be negative (less than zero), as ","cos(ang)"," will be negative","\n  ","\n  ","So what does this mean for those of us that make games? Well, this mathematical relationship can be used in quite a few circumstances, but the best way to see it is to build an actual scenario and see for yourself what is going on. One of the simplest\n    ways to do this is to generate a simple \"line of sight\" check for an enemy in, say, a platform game so that the enemy will \"see\" the player if they are within 90° of either side of their vector ","normal",".","\n  ","Basically, we have to get the vector normal from the enemy (ie: comprised of a direction and sight distance)\n    and then we need to get the vector of the player to the enemy. We will then get the dot_product of these vectors, and if the result is positive the player has been seen, and if it is negative he hasn't. The actual code to get this working is supplied\n    in the example below.","\n  "," ","\n  ","\n  ","dot_product(x1, y1, x2, y2)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the first vector.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the first vector.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the second vector.","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the second vector.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var x1, y1, x2, y2;"," x1 = lengthdir_x(1, image_angle);"," y1 = lengthdir_y(1, image_angle);"," x2 = o_Player.x - x;"," y2 = o_Player.y - y;"," if dot_product(x1, y1, x2, y2) > 0 seen=true else seen=false;","\n  ","The above code creates a vector using the instances image angle, and then gets the vector of the player object \"o_Player\" to itself. Finally it calculates the dot product of these two vectors and if it is greater than 0 it sets the variable\n    \"seen\" to true, and if it is equal to or less than 0 it sets it to \"false\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Angles And Distance","\n        ","Next: ","dot_product_3d","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["dot_product"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2175"})