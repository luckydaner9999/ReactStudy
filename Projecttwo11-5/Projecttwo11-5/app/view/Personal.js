/*
 * Created by waltyuqing on 16/10/8.
 */
Ext.define('private_cooker.view.Personal', {
    extend: 'Ext.Panel',
    xtype: 'personal',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        id:'personal',
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
                    title:'个人中心',
                    cls:'tool_bar_personal',
                    items:[
                        {
                            cls:'btn_backmain_personal',
                            xtype:'button',
                            id:'btn_backmain_personal',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resourceses/images/back.png" class="private_back_img"/>'
                        }

                    ]
                }
            },
            //个人头像大框
            {
                flex:1,
                width:'100%',
                style:'background-color:#ff393d',
                cls:'personal_backgroundimage',
                layout:{
                    type:'vbox',//vbox纵向,hbox横向
                },
                items:[
                    {
                        flex:2,
                        //xtype:'button',
                        id:'header_personal',
                        cls:'header_personal',
                        html:'<div class="html_header_personal"><img src="resources/images/header_personal.jpg"></div>'
                    },
                    {
                        flex:1,
                        id:'id_personal',
                        cls:'id_personal',
                        html:''
                    }
                ]
            },
            {
                flex:3,
                width:'100%',
                xtype:'panel',
                style:'background-color:#fafafa',
                layout:{
                    type:'vbox',//vbox纵向,hbox横向
                },
                items:[
            //我的订单
                    {
                        flex:1,
                        id:'id_order_personal',
                        cls:'order_personal',
                       /* style:'background-color:#e7e7e7;',*/
                        items:[
                            {
                                flex:1,
                                id:'in_order_personal',
                                cls:'in_order_personal',
                                layout:{
                                    type:'hbox',//vbox纵向,hbox横向
                                },
                                items:[
                                    {
                                        flex:1,
                                        id:'icon_order_personal',
                                        cls:'icon_order_personal',

                                    },
                                    {
                                        flex:2,
                                        id:'text_order_personal',
                                        cls:'text_order_personal',
                                        html:'<div class="my_order">我的订单</div>',
                                    },
                                    {
                                        flex:3,
                                        xtype:'button',
                                        id:'order_more_personal',
                                        cls:'order_more_personal',

                                    },
                                ]

                            },

                        ]
                    }   ,
            //我的收藏
                    {
                        flex:1,
                        id:'collect_personal',
                        cls:'collect_personal',
                        style:'background-color:#e7e7e7',
                        items:[
                            {
                                flex:1,
                                id:'in_collect_personal',
                                cls:'in_collect_personal',
                                layout:{
                                    type:'hbox',//vbox纵向,hbox横向
                                },
                                items:[
                                    {
                                        flex:1,
                                        id:'icon_collect_personal',
                                        cls:'icon_collect_personal',

                                    },
                                    {
                                        flex:2,
                                        id:'text_collect_personal',
                                        cls:'text_collect_personal',
                                        html:'<div class="my_order">我的收藏</div>',
                                    },
                                    {
                                        flex:3,
                                        xtype:'button',
                                        id:'collect_more_personal',
                                        cls:'collect_more_personal',

                                    },
                                ]

                            },

                        ]
                    },
            //我的地址
                    {
                        flex:1,
                        id:'address_personal',
                        cls:'address_personal',
                        style:'background-color:#e7e7e7',
                        items:[
                            {
                                flex:1,
                                id:'in_address_personal',
                                cls:'in_address_personal',
                                layout:{
                                    type:'hbox',//vbox纵向,hbox横向
                                },
                                items:[
                                    {
                                        flex:1,
                                        id:'icon_address_personal',
                                        cls:'icon_address_personal',

                                    },
                                    {
                                        flex:2,
                                        id:'text_address_personal',
                                        cls:'text_address_personal',
                                        html:'<div class="my_order">我的地址</div>',
                                    },
                                    {
                                        flex:3,
                                        xtype:'button',
                                        id:'address_more_personal',
                                        cls:'address_more_personal',

                                    },
                                ]

                            },

                        ]
                    },
            //厨师招募
                    {
                        flex:1,
                        id:'cooker_personal',
                        cls:'cooker_personal',
                        style:'background-color:#e7e7e7',
                        items:[
                            {
                                flex:1,
                                id:'in_cooker_personal',
                                cls:'in_cooker_personal',
                                layout:{
                                    type:'hbox',//vbox纵向,hbox横向
                                },
                                items:[
                                    {
                                        flex:1,
                                        id:'icon_cooker_personal',
                                        cls:'icon_cooker_personal',

                                    },
                                    {
                                        flex:2,
                                        id:'text_cooker_personal',
                                        cls:'text_cooker_personal',
                                        html:'<div class="my_order">厨师招募</div>',
                                    },
                                    {
                                        flex:3,
                                        xtype:'button',
                                        id:'cooker_more_personal',
                                        cls:'cooker_more_personal',

                                    },
                                ]

                            },

                        ]
                    },
            //我的客服
                    {
                        flex:1,
                        id:'custom_service_personal',
                        cls:'custom_service_personal',
                        style:'background-color:#e7e7e7',
                        items:[
                            {
                                flex:1,
                                id:'in_custom_service_personal',
                                cls:'in_custom_service_personal',
                                layout:{
                                    type:'hbox',//vbox纵向,hbox横向
                                },
                                items:[
                                    {
                                        flex:1,
                                        id:'icon_custom_service_personal',
                                        cls:'icon_custom_service_personal',

                                    },
                                    {
                                        flex:2,
                                        id:'text_custom_service_personal',
                                        cls:'text_custom_service_personal',
                                        html:'<div class="my_order">我的客服</div>',
                                    },
                                    {
                                        flex:3,
                                        xtype:'button',
                                        id:'custom_service_more_personal',
                                        cls:'custom_service_more_personal',
                                        html:'<a href="tel:18915543138">拨号</a>',

                                    },
                                ]

                            },

                        ]
                    },
            //我的帐号
                    {
                        flex:1,
                        id:'account_personal',
                        cls:'account_personal',
                        style:'background-color:#e7e7e7',
                        items:[
                            {
                                flex:1,
                                id:'in_account_personal',
                                cls:'in_account_personal',
                                layout:{
                                    type:'hbox',//vbox纵向,hbox横向
                                },
                                items:[
                                    {
                                        flex:1,
                                        id:'icon_account_personal',
                                        cls:'icon_account_personal',

                                    },
                                    {
                                        flex:2,
                                        id:'text_account_personal',
                                        cls:'text_account_personal',
                                        html:'<div class="my_order">我的帐号</div>',
                                    },
                                    {
                                        flex:3,
                                        xtype:'button',
                                        id:'account_more_personal',
                                        cls:'account_more_personal',
                                    }
                                ]

                            },

                        ]
                    },


            //bottom下面的颜色

                    {
                        flex:1,
                        style:'background-color:#e7e7e7'
                    }

                ]

            }




        ]
    }
});

