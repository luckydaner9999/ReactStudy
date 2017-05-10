/*
 * Created by waltyuqing on 16/10/8.
 */

Ext.define('private_cooker.view.Personal_Collect', {
    extend: 'Ext.Panel',
    xtype: 'order_personal_detail',

    requires: [
        'Ext.TitleBar'
    ],
    config: {

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
                            xtype:'button',
                            id:'btn_back_personal_detail',
                            cls:'btn_backmain_personal',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="private_back_img"/>'
                        }

                    ]
                }
            },
            {
                xtype:'panel',
                cls:'all_order_personal',
                style:'height:800px;',
                items: {
                    xtype:'dataview',
                    cls:'all_order_personal',
                    style:'height:800px;',
                    scrollable: true,
                    id:'all_order_personal_detail',

                    items:[
                        {
                            xtype:'searchfield',
                            height:'40px',
                            id:'text_search_number',
                            placeHolder:sessionStorage.getItem('number'),
                        }]
                }
            },
            //个人头像大框
        ]
    }
});

