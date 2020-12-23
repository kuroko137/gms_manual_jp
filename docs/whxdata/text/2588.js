rh._.exports({"0":["Arrays","Arrays"],"1":["Arrays"],"2":["Arrays"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Arrays","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","Arrays can be extremely useful and are an essential part of making games. Here are just a few things that would be impossible (or at least, a lot more difficult) without arrays:","\n  ","\n    ","Menus. An array or two can make it much easier to create a good menu system.","\n    ","RPGs. Arrays are essential for making RPGs, because instead of having a jumble of variables, you just have a few lines, which you can refer back to at any time.","\n    ","Card Games. Good for keeping track of cards and hands.","\n    ","High scores and other statistics. Much easier to keep track of one array than multiple variables.","\n  ","\n  ","That's just the tip of the iceberg as arrays are one of the most fundamental and useful programming tools you can use, and you'd be surprised at the applications they can have! They are also very memory efficient and generally fast to parse,\n    making them ideal for keeping performance to a maximum.","\n  ","A basic array is classed as having 1 ","dimension",", but you can have arrays with more than one dimension too. The sections below explain a bit more about both types of array: ","\n  "," ","\n  ","1 Dimension Arrays","1 Dimension Arrays","\n  ","\n    ","Before going any further let's just clarify what an array actually is and how it's structured. An array is simply a ","data type"," that is assigned to a variable, and it can contain not just one value, but multiple\n      values. The image below shows a schematic for a basic array: ","\n    ","\n    ","This is called a ","1D"," (one dimension) array, and as you can see the array is stored in the variable \"","a","\" and contains multiple values. To access the array you would do something like the following:","\n    ","var _val = a[0];"," show_debug_message(_val);\n    ","\n    ","The above code gets the value from position 0 of the array \"a\" then outputs it to the console, which - based on the contents of the array shown in the image above - would output 125. If you did the following:","\n    ","var _val = a[3];"," show_debug_message(_val);\n    ","\n    ","The output would show \"Hi!\".","\n    ","As you can see, you give the array a variable name and then a value in square brackets ","[]",", where the value is the position in the array to get data from. So, essentially an array is a container with a number of spaces to\n      store values, and each position in the container has a specific number to identify it, which is what we put in the ","[]",". It's worth noting that the contents of an array ","always start at 0"," and can ","never be negative","!","\n    ","We've shown how to check an array for data, but how do we create the array to start with? First it has to be ","initialized"," before we can use it or GameMaker Studio 2 will give us an error. Initializing an array just means that we give each\n      position of the array an initial value in preparation for it to be used elsewhere in the project code. This is important to remember as it means that you have to do a certain amount of planning before using arrays, but it is easy enough to initialize\n      one using a repeat loop like this...","\n    ","var i = 9;"," repeat(10)\n      ","     {\n      ","     array[i] = 0;","     i -= 1;","     }\n    ","\n    ","This simple code will initialize a ten position array (from 0 to 9) to hold 0, ie: each position in the array contains the value 0. You will notice that the array has been initialised ","backwards",", with the last value being defined first. This\n      is not strictly necessary but is the optimal way to do it as it will reserve a space in memory that is the exact size of the array, whereas if you initialize an array from 0 ","upwards",", the memory has to be re-allocated for every additional\n      value added (so for a ten item array, initialising it in a loop would change the memory allocation ten times). The speed difference is negligible for smaller arrays, but larger ones should be optimised as much as possible in this way.","\n    ","NOTE",": The HTML5 export is the exception to the above rule, and when targeting that you should initialise arrays in consecutive order from 0 upwards.","\n    ","You can also use the GML function ","array_create()"," to initialise an array to a fixed size, and you can even create \"empty\" arrays with ","no"," values, for example:","\n    ","my_array= [];","\n    ","This tells GameMaker that the variable \"my_array\" is an array, and you can then add values to it at any time in the future. However, if you try to access a value in an empty array then you will get an error. In fact, you should always take\n      care to only access valid array positions, as trying to access a value outside of an array will also give an error. For example, this will cause the project to crash when run:","\n    ","my_array = array_create(5, 0);"," var _val = my_array[6];","\n    ","The array was only initialised with 5 positions, but we've tried to get position 7 - arrays are numbered from 0 so ","array[6]"," is position 7 - therefor the game generates an error and crashes.","\n    ","We've shown how to initialise and array with the same value for every position, but what if we want to initialize the array with different values for each position? Well for that we have to manually type each and every position ourselves, but\n      there is a nice trick to help us keep track of things there:","\n    ","var _count = 3;"," array[_count] = \"you?\""," count -= 1;"," array[_count] = \"are \""," count -= 1;"," array[_count] = \"How \""," count -= 1;"," array[_count] = \"Hello!\""," count -= 1;","\n    ","As you can see, we haven't used any numbers in the actual array, rather a ","local variable"," to count down through the values. This is very useful, especially for larger arrays, as it means you don't\n      have to track how many positions there are nor which number you are on, as the code will look after that for you. You just need to know how many total positions the array has to hold.","\n    ","Finally you can assign the values to an array using a single variable call like this:","\n    ","var _a = [0, 1, 2, 3, 4];"," var _b = [];","\n    ","The above will create two arrays as local variables, the first already populated with 5 elements and the second as an empty array ready to have values added.","\n    ","With that done how do we use an array for practical things? Exactly the same as we would use a normal variable, as shown by the following examples:","\n    ","// Add two array values together"," total = array[0] + array[5];","\n      "," // Check an array value"," if (array[9]) == 10","     {\n      ","     //do something","     }\n      ","\n      "," // draw an array value"," draw_text(32, 32, array[3]);","\n    ","Since arrays are numbered consecutively, this means you can loop through them to perform extra actions too, just like we did to initialize it:","\n    ","var total = 0;"," for (var i = 0; i < 10; ++i;)","     {\n      ","     total += array[i];","     draw_text(32, 32 + (i * 32), array[i]);","     }\n      "," draw_text(32, 32 + (i * 32), total);","\n    ","The above code will add up all the values in our array, draw each of them and draw the total value at the end.","\n    ","The last thing to mention about arrays is that you can also delete an array simply by \"re-assigning\" the variable that defines it to a single value. This will free up the memory associated with all the positions and values for that array.\n      For example:","\n    ","//Create the array for (var i = 9; i > -1; --i;)","     {\n      ","     a[i] = i;","     }\n      "," //Delete the array"," a = -1;","\n    ","If the array has multiple dimensions (see below), they will all be cleaned up too, and note that when you create arrays in instances, these do not need to be cleaned up when the instance is removed from the game, as they will be removed automatically\n      by the ","garbage collector"," on destroy or room end. However, if any of the array positions hold references to ","dynamic"," assets - like particle systems, buffers, or data structures\n      - then these ","will"," need to be destroyed before the array is deleted or the instance is destroyed or the room ends.","\n    "," ","\n  ","\n  ","Multi-Dimension Arrays","Multi-Dimension Arrays","\n  ","\n    ","We know what a 1 dimension array is, but in GameMaker Studio 2 you can have arrays with multiple dimensions, which are essentially structured as an array inside an array inside an array... For example, the following is a ","2D"," (two dimension) array","\n    ","array[0][0] = 5;","\n    ","This is essentially telling GameMaker that the array is actually comprised of various 1D arrays. Here's an extended example:","\n    ","array[1][2] = 1;"," array[1][1] = \"hello\";"," array[1][0] = 55.5;"," array[0][2] = sprite_index;"," array[0][1] = \"world\";"," array[0][0] = -67.89;","\n    ","A multi-dimension array needs to be initialised before use, the same as a single 1D array, and can hold real numbers, strings, and any other ","data type",", just like any variable, making them ideal candidates for any game\n      that needs to store large amounts of data in an easily accessible way (remember, you can loop through an array easily). Here is one final example of how this may be used in an actual game... Say you want to spawn four different enemies at four different\n      points in your game depending on a random value. Well, we can use an array with 2 dimensions to do this and save writing out a load of code.","\n    ","First we should initialize the array we are going to use in the create event of our \"controller\" object (note the use of comments to remind you what each array entry does):","\n    ","enemy[3][2] = 448;       //y position"," enemy[3][1] = 32;        //x position"," enemy[3][0] = obj_Slime; //Object"," enemy[2][2] = 448;"," enemy[2][1] = 608;"," enemy[2][0] = obj_Skeleton;"," enemy[1][2] = 32;"," enemy[1][1] = 608;","      enemy[1][0] = obj_Knight;"," enemy[0][2] = 32;"," enemy[0][1] = 32;"," enemy[0][0] = obj_Ogre;","\n    ","We now have the objects to spawn instances of and their corresponding x and y spawn coordinates within the room all stored in our array. This can now be used as follows in another event of the controller object (an alarm for example, or a key press\n      event):","\n    ","//get a random number from 0 to 3, inclusive"," var i = irandom(3);"," //Use the array to create the object"," instance_create_layer(enemy[i][1], enemy[i][2], \"Enemy_Layer\", enemy[i][0]);","\n    ","That short code will now spawn a random enemy in the game room, and it uses far less code than an \"","if / then / else","\" structure or even a \"","switch","\", and as the array is initialized all together in the create event\n      it is MUCH easier to edit and change any of those values as they are not ","hard-coded"," into the rest of the project code.","\n    ","It should be noted too that the length of each dimension in the array can be different, so you can have the initial array dimension with a length of 3, but the second dimension entry can be a different length for each of the the initial array values\n      it's assigned to, for example:","\n    ","array[2][2] = \"3\";"," array[2][1] = \"2\";"," array[2][0] = \"1\";"," array[1][3] = \"four\";"," array[1][2] = \"three\";"," array[1][1] = \"two\";"," array[1][0] = \"one\";","      array[0][1] = 2;"," array[0][0] = 1;","\n    ","Finally, multi-dimension arrays are not limited to ","just ","two dimensions, and you can have 3, 4 or more dimensions to an array as required in your code, just by adding ","[n]"," further arguments, eg:","\n    ","array[0][0][0] = 1;     // A three dimensional array"," array[0][0][0][0] = 1;  // A four dimensional array"," // etc...","\n  ","\n  "," ","\n  ","Just like normal variables, you can pass arrays through to ","script functions"," and ","method variables"," to be used and then returned to the instance that called the function. To do this,\n    you simply have to specify the array variable (no need for each of the individual positions, nor the ","[]"," brackets) and the entire array will be ","passed by reference"," into the function. However, should you change any\n    of the array values, the array will be copied into a ","temporary ","array just for that function. ","Note the use of the word ","temporary"," here!"," You are not actually passing the array itself into the function (as you would a\n    variable), but instead you are requesting that the function create a ","copy"," of this array, which you will change. This means that you ","must always return the array"," from the function if you wish to change any array values (this behaviour\n    is called \"","copy on write","\").","\n  ","NOTE: ","Due to the way that this works internally, passing arrays to functions may affect performance, especially if the array is very large. So use this functionality with care!","\n  ","As an example, consider the following code. First we create the array we want to use, and then we pass that array to the function:","\n  ","for (var i = 9; i > -1; --i;)","     {\n    ","     a[i] = i;","     }\n    "," my_array_func(a);\n  ","\n  ","The function itself is something simple like:","\n  ","my_array_func = function(array)","     {\n    ","     for (var i = 9; i > -1; --i;)","         {\n    ","         array[i] = i * 100;","         }\n    ","     }\n  ","\n  ","Now you would expect the final array to hold the values 900, 800, 700, etc... BUT this will not be the case, since we did ","not"," return the array from the function, so all we changed was the temporary copy that was created when we passed the array\n    as an argument into the function, and when the function has finished that basically disappears too. To rectify this we should have formatted the code as follows:","\n  ","for (var i = 9; i > -1; --i;)","     {\n    ","     a[i] = i;","     }\n    "," a = my_array_func(a);","\n  ","And the function should now look like this:","\n  ","my_array_func = function(array)","     {\n    ","     for (var i = 9; i > -1; --i;)","         {\n    ","         array[i] = i * 100;","         }\n    ","     return array;","     }\n  ","\n  ","NOTE: ","The above is ","not"," necessary if you are not changing any of the array values, but rather simply referencing them. Referencing an array will not copy it and will be faster to parse.","\n  ","It is also worth noting that you can use the accessor ","@"," to reference an array from a function and change its values directly, which saves the CPU overhead of having it copied into the function. You can find out more information on accessors\n    and how they work, along with an example for arrays, from the following page:","\n  ","\n    ","Accessors","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Overview","\n        ","Next: ","Data Types","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Arrays"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2588"})