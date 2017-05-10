/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'private_cooker',

    requires: [
        'Ext.MessageBox',
        'private_cooker.util.Tools',
        'Ext.plugin.ListPaging'

    ],

    views: [
        'Main',
        'Service',
        'Login',
        'Register',
        'Private',
        'Privatemeal',
        'Privateorder',
        'Pay',

        'Cookers',
        'Cooker_details',
        'Cooker_dishes',
        'Personal',
        'Order_Personal',
        'Order_Personal_Detail',
        'Comment_Personal',
        'Collect_Personal',
        'Address_Personal',
        'Address_Personal',
        'Add_Address',
        'Cooker_Personal',
        'Myaccount_Personal',
        'Change_Password_Personal',
        'Change_Header'

    ],
     controllers:[
         'Ctrl_Service',
         'Ctrl_Login',
         'Ctrl_Register',
         'Ctrl_Private',
         'Ctrl_Privatemeal',
         'Ctrl_Privateorder',
         'Ctrl_Pay',


         'Ctrl_Cookers',
         'Ctrl_Cooker_details',
         'Ctrl_Cooker_dishes',

         'Ctrl_Main', 'Ctrl_Personal',
         'Ctrl_Order_Personal',
         'Ctrl_Order_Personal_Detail',
         'Ctrl_Comment_Personal',
         'Ctrl_Collect_Personal',
         'Ctrl_Address_Personal',
         'Ctrl_Cooker_Personal',
         'Ctrl_Myaccount_Personal',
         'Ctrl_Add_Address',
         'Ctrl_Change_Password_Personal',
         'Ctrl_Change_Header'
     ],
    models:[
        'Model_Order',
        'Model_Collect',
        'Model_Address',
        'Model_Add_Address',

        'Model_Cooker',
        'Model_Cooker_details',

        'Model_User',
        'Model_Privatemeal'
    ],
    stores:[
        'Store_Order',
        'Store_Collect',
        'Store_Address',
        
        'Store_Cooker',
        'Store_Cooker_arrange_o',
        'Store_Cooker_details',
        'Store_Cooker_search',
        'Store_Cooker_dishes',
        'Store_Cooker_dishes_search',

        'Store_User',
        'Store_Privatemeal'
       // 'choose_address_store'
    ],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // console.log(choose_address_store)
        // Ext.Viewport.add(Ext.create('private_cooker.view.Main'));
      this.redirectTo('route_main');

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
