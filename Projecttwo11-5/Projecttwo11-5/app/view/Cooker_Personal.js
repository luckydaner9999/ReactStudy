/*
 * Created by waltyuqing on 16/10/8.
 */
Ext.define('private_cooker.view.Cooker_Personal', {
    extend: 'Ext.Panel',
    xtype: 'cooker_personal',

    config: {
        layout:{
            type:'vbox',

        },
        items: [
            {
                items: {
                    docked: 'top',
                    xtype:'titlebar',
                    title:'厨师招募',
                    cls:'tool_bar_personal',
                    items:[
                        {
                            cls:'btn_backmain_personal',
                            xtype:'button',
                            id:'btn_back_cooker_personal',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="private_back_img">'
                        }

                    ]
                }
            },
            {
                flex:1,
                styleHtmlContent: true,
                scrollable: true,
                height:'100%',
                width:'100%',
                cls:'img_private_cooker',
                items: [{
                    xtype:'img',
                    src:"resources/images/cooker.jpg",
                    width:'100%',
                    height:'600px'
                }]
            },
        ]
    }
});

