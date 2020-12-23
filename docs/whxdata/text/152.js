rh._.exports({"0":["Users And Accounts","Users And Accounts"],"2":["XBox Live User Accounts,User Accounts"],"3":["\n  ","\n    ","\n    ","\n    ","\n      ","\n        ","Users And Accounts","\n      ","\n      ","\n        ","Click here to see this page in full context","\n      ","\n    ","\n  ","\n  ","\n\n\n\n  ","\n  ","\n  ","This section is for users targeting the UWP or Xbox One platforms and outlines the XBox Live functions available for dealing with users and user accounts.","\n  ","The Xbox One allows multiple users to sign in to a console simultaneously. Each user has a specific controller associated with them and any save game data is also user-specific. To make the most of this system, GameMaker Studio 2 introduces a number\n    of XBox One only functions related to the association between controllers and users, permitting you to query information about the user and also controlling how save data is handled on a per-user basis. You can find further developer information about\n    this system from the official white paper on the ","Microsoft developer site",".","\n  ","NOTE",": Note that the User ID is unique to each individual and is perpetuated across different consoles, so if the same user signs in on two different devices this User ID will be the same.","\n  ","The following functions exist for you to use with XBox Live accounts, both on the XBox One and with the regular UWP export (note this is the minimum functionality permitted for UWP under the ","Creators Program",", as outlined in ","this helpdesk article","):","\n  "," ","\n  ","\n    ","x","boxlive_user_is_signed_in","\n    ","xboxlive_user_is_signing_in","\n    ","xboxlive_gamertag_for_user","\n    ","xboxlive_show_account_picker","\n  ","\n  "," ","\n  ","The following functions are ","only"," valid when targeting the XBox One using UWP with a valid ","ID@XBox account",":","\n  "," ","\n  ","\n    ","xboxlive_get_user_count","\n    ","xboxlive_get_user","\n    ","xboxlive_get_activating_user","\n    ","xboxlive_user_is_guest","\n    ","xboxlive_user_is_active","\n    ","xboxlive_user_is_remote","\n    ","xboxlive_user_id_for_user","\n    ","xboxlive_sponsor_for_user","\n    ","xboxlive_set_rich_presence","\n    ","xboxlive_gamedisplayname_for_user","\n    ","xboxlive_user_for_pad","\n    ","xboxlive_pad_for_user","\n    ","xboxlive_pad_count_for_user","\n    ","xboxlive_agegroup_for_user","\n    ","xboxlive_gamerscore_for_user","\n    ","xboxlive_show_profile_card_for_user","\n    ","xboxlive_reputation_for_user","\n    ","xboxlive_sprite_add_from_gamerpicture","\n    ","xboxlive_generate_player_session_id","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UWP And XBox Live","\n        ","Next: ","Saving Data","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Users And Accounts"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"152"})