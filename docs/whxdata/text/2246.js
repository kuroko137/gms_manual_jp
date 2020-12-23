rh._.exports({"0":["Room Inheritance","Room Inheritance"],"1":["Rooms - Inheritance"],"2":["room inheritance,inherit,inheritance"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Room Inheritance","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","An important feature of the room editor is ","inheritance",". Inheritance means that you can create a \"parent\" room then from that create a \"child\" room which will inherit all the parent room's properties. This child\n    room is essentially a ","clone ","of the parent, and everything in it ","is linked to the parent room",". This means that if you change the view in the parent, or move a tile, or add instances, it will be reflected in the child room.\n    Not only that, in the child room you can selectively switch off inheritance for specific layers, instances, assets or anything else that is required.","\n  ","A room that has inherited properties will have the inherit buttons lit - as shown by the image below - and you can then use them to toggle inheritance on or off for the given layer or resource, etc...","\n  ","This can be a bit difficult to visualise at first, so let's look at an example: say you have a room with a city and a castle in\n    the middle. The city and castle are drawn using different tile layers and you also have instances and some paths for NPCs to use to walk around. You want to have it so that in the game the castle is destroyed, but everything else in the city looks\n    and behaves the same. You would create the initial room with everything as normal, then you'd create a child room which inherits the parent room layers. In the child room you'd switch ","off ","inheritance for the tile layer (or even individual\n    tiles) for the castle area and them move/add/delete tiles to create the destroyed castle look. When a player enters that room, all the instances from the parent room and all the tiles etc... will remain exactly the same, except for those of the destroyed\n    castle.","\n  ","IMPORTANT!"," If you edit any inherited property it will automatically turn off inheritance in the section it belongs to without having to first toggle the inherit button.","\n  ","To create room inheritance, you simply select the room you want to create a child from in the ","Asset Browser"," and then right-click ",". This will open the room menu and there you can select ","Create Child ","to create a new child room. This will be created and \"attached\" to the parent visually in the Asset Browser:","\n  ","To change the room order and/or inheritance you need to use the ","Room Manager",", which you\n    can open using the menu in the top right of the Asset Browser. Here you can go to the ","Inheritance ","tab and then click "," and drag any room onto any other room to\n    have it become a child of that room (or drag a child room off a parent and break the inheritance).","\n  ","Note that, within a room, inheritance is multi-layered and you can check individual items, groups of items on a single layer, item properties, or whole rooms as inheriting, and you can also inherit from consecutive rooms (so room C inherits from room\n    B, which in turn has inherited from Room A). If you create a base room with nothing in it except the view setup - for example - you can then create all further rooms as being its children and they will all inherit the view properties of the parent\n    room. But you can go a step further and create another base room with the \"view\" room as its parent which holds the general ","GUI"," instance and the controllers required in every game room.\n    Now you can create child rooms from this and they will inherit both the controllers and GUIs from the parent room as well as the view setup from the parent of that room!","\n  ","As you can hopefully see, inheritance is very powerful and you can use it to maintain a much cleaner room structure, speed up the workflow and generally optimise the time you spend making and designing rooms.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Room Editor","\n        ","Next: ","Layer Types And Properties","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Room Inheritance"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2246"})