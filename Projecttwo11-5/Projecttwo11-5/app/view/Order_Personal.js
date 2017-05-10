/*
 * Created by waltyuqing on 16/10/8.
 */
Ext.define('private_cooker.view.Order_Personal', {
    extend: 'Ext.Panel',
    xtype: 'order_personal',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        layout:{
            type:'vbox',

        },
        items: [
            //最上面的返回行
            {
                styleHtmlContent: true,
                scrollable: true,
                items: {
                    docked: 'top',
                    xtype:'titlebar',
                    title:'我的订单',
                    cls:'tool_bar_personal',
                    items:[
                        {
                            cls:'btn_backmain_personal',
                            xtype:'button',
                            id:'btn_back_personal',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="private_back_img"/>'
                        }

                    ]
                }
            },
            {
                flex:1,
                xtype:'panel',
                cls:'all_order_personal',
                style:'height:100%;',
                items: {
                    xtype:'dataview',
                    style:'height:100%;',
                    scrollable: true,
                    id:'all_order_personal',

                }
            },




        ]
    }
});

