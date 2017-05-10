/*
 * Created by waltyuqing on 16/10/8.
 */
Ext.define('private_cooker.view.Address_Personal', {
    extend: 'Ext.Panel',
    xtype: 'address_personal',
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
                    title:'地址管理',
                    cls:'tool_bar_personal',
                    items:[
                        {
                            cls:'btn_backmain_personal',
                            xtype:'button',
                            id:'btn_back_address_personal',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="private_back_img"/>'
                        }
                    ]
                }
            },
            {
                flex:18,
                xtype:'panel',
                cls:'all_address_personal',
                style:'height:500px;',
                items: {
                    xtype:'dataview',
                    style:'height:100%',
                    scrollable: true,
                    id:'all_address_personal',
                    itemCls:'dw_item_address_personal',
                    selectedCls:'dw_selectedItem_address_personal',
               
                }
            }
            ,
            {
                // flex:1,
                xtype:'button',
                height:'50px',
                text:'添加地址',
                cls:'add_address_personal',
                id:'add_address_personalone'
            }




        ]
    }
});

