/*
 * Created by waltyuqing on 16/10/8.
 */
Ext.define('private_cooker.view.Collect_Personal', {
    extend: 'Ext.Panel',
    xtype: 'collect_personal',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        layout:{
            type:'vbox',//vbox纵向,hbox横向
        },
        items: [
            //最上面的返回行
            {
                styleHtmlContent: true,
                scrollable: true,
                items: {
                    docked: 'top',
                    xtype:'titlebar',
                    title:'我的收藏',
                    cls:'tool_bar_personal',
                    items:[
                        {
                            cls:'btn_backmain_personal',
                            xtype:'button',
                            iconCls:'back_cooker',
                            align:'left',
                            id:'btn_back_personal_collect',
                            // html:'<img src="resources/images/back.png" class="private_back_img"/>'
                        }

                    ]
                }
            },
            {
                flex:1,
                xtype:'panel',
                cls:'all_order_personal',
                style:'height:500px',
                items: {
                    xtype:'dataview',
                    style:'height:100%',
                    scrollable: true,
                    id:'all_Collect_personal',

                }
            },
            //个人头像大框




        ]
    }
});

