rh._.exports({"0":["physics_joint_distance_create","physics_joint_distance_create"],"1":["physics_joint_distance_create"],"2":["physics_joint_distance_create"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","physics_joint_distance_create","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","One of the simplest joint is a distance joint which says that the distance between two points on two instances must be constant. When you specify a distance joint the two instances should already be created and have a fixture assigned, then you define\n    the two anchor points in room coordinates. The first anchor point is connected to instance 1, the second anchor point is connected to instance 2 and the distance between these points imply the length of the distance constrain. The image below shows\n    how this works:","\n  ","As you can see, the anchor points are specified as room coordinates so care must be taken when\n    defining them, especially if the instances are being created at the same time as the joints rather than being placed in the room through the room editor. You should also realise that the joints are created independently of the size of the sprite of\n    the instances or the fixtures they have attached. So, if you create a distance joint somewhere other than the origin of the instance, it is still valid and will constrain the two instances relative to the position at which it was created. If you set\n    the \"col\" value to ","true"," then the two instances can interact and collide with each other but ","only"," if they have collision events, however if it is set to ","false",", they will not collide no matter what.","\n  "," ","\n  ","\n  ","physics_joint_distance_create(inst1, inst2, w_anchor1_x, w_anchor1_y, w_anchor2_x, w_anchor2_y, col)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","inst1","\n        ","The first instance to connect with the joint","\n      ","\n      ","\n        ","inst2","\n        ","The second instance to connect with the joint","\n      ","\n      ","\n        ","w_anchor1_x","\n        ","The first x coordinate for the joint, within the game world","\n      ","\n      ","\n        ","w_anchor1_y","\n        ","The first y coordinate for the joint, within the game world","\n      ","\n      ","\n        ","w_anchor2_x","\n        ","The second x coordinate for the joint, within the game world","\n      ","\n      ","\n        ","w_anchor2_y","\n        ","the second y coordinate for the joint, within the game world","\n      ","\n      ","\n        ","col","\n        ","Whether the two instances can collide (true) or not (false)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (index of the joint)","\n  "," ","\n  ","\n  ","var mainFixture, o_id;"," mainFixture = physics_fixture_create();"," physics_fixture_set_circle_shape(mainFixture, sprite_get_width(sprite_index) / 2);"," o_id=instance_create_layer(x+300, y, \"Instances\", obj_Rudder);"," physics_fixture_bind(mainFixture,\n    id);"," physics_fixture_bind(mainFixture, o_id);"," physics_joint_distance_create(id, o_id, x + 50, y, o_id.x - 50, o_id.y, 0);"," physics_fixture_delete(mainFixture);\n  ","\n  ","The above code creates and defines a new fixture and then creates an instance of \"obj_Rudder\". The fixture is then assigned to the instance that is running the code as well as the newly created one and a joint is created between them. Finally\n    the fixture is deleted as it is no longer needed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Joints","\n        ","Next: ","physics_joint_revolute_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_joint_distance_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2200"})