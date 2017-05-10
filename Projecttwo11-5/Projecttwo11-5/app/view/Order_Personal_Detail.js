/*
 * Created by waltyuqing on 16/10/8.
 */

Ext.define('private_cooker.view.Order_Personal_Detail', {
    extend: 'Ext.Panel',
    xtype: 'order_personal_detail',

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
                    title:'订单详情',
                    cls:'tool_bar_personal',
                    items:[
                        {
                            cls:'btn_backmain_personal',
                            xtype:'button',
                            id:'btn_back_personal_detail',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="private_back_img"/>'
                        }

                    ]
                }
            },

            {
               
                id:'',
                xtype:'panel',
                cls:'personal_detail_content',
                layout:{
                    type:'vbox',//vbox纵向,hbox横向
                },
                items:[
//联系人
                    {
                        flex:1,
                        cls:'personal_detail_content_top',
                        style:'background-color:#fcfcfc',
                        layout:{
                            type:'hbox',//vbox纵向,hbox横向
                        },
                        items:[

                            {

                                flex:9,
                                xtype:'panel',
                                id:'personal_detail_contacts',
                                cls:'personal_detail_content_name_left',
                            },
                            {
                                flex:1,
                                id:'personal_detail_delete_button',
                                xtype:'button',
                                cls:'personal_detail_delete_button',
                                text:'<div class="cancel_img"><img src="resources/images/cancel.png" ></div>'
                            },
                        ]

                    },
//联系电话
                    {
                        flex:1,
                        cls:'personal_detail_content_top',
                        style:'background-color:#fcfcfc',
                        layout:{
                            type:'vbox',//vbox纵向,hbox横向
                        },
                        items:[

                            {
                                flex:1,
                                xtype:'panel',
                                id:'personal_detail_content_tel',
                                cls:'personal_detail_content_name',
                                layout:{
                                    type:'hbox',//vbox纵向,hbox横向
                                },
                                items:[

                                    {
                                        flex:1,
                                        xtype:'panel',
                                        id:'',
                                        cls:'personal_detail_content_name_left',
                                        title:'',
                                        html:'',
                                    },

                                ]
                            }
                        ]

                    },
//服务地址
                    {
                        flex:1,
                        cls:'personal_detail_content_top',
                        style:'background-color:#fcfcfc;margin-bottom:20px',
                        layout:{
                            type:'vbox',//vbox纵向,hbox横向
                        },
                        items:[

                            {
                                flex:1,
                                xtype:'panel',
                                id:'personal_detail_content_address',
                                cls:'personal_detail_content_address',
                                html:''
                            }
                        ]

                    },
//用餐时间
                    {
                        flex:1,
                        cls:'personal_detail_content_top',
                        style:'background-color:#fff;',
                        layout:{
                            type:'vbox',//vbox纵向,hbox横向
                        },
                        items:[

                            {
                                flex:1,
                                xtype:'panel',
                                id:'personal_detail_content_time',
                                cls:'',
                                html:'<div class="personal_detail_my_order">用餐时间:<span></span></div>'
                            }
                        ]

                    },
//厨师头像和姓名
                    {
                        flex:1,
                        cls:'',
                        style:'background-color:#fff',
                        layout:{
                            type:'hbox',//vbox纵向,hbox横向
                        },
                        items:[

                            {
                                flex:1,
                                xtype:'panel',
                                id:'personal_detail_content_c_icon',
                                cls:'',
                                html:''
                            },

                            {
                                flex:3,
                                xtype:'panel',
                                id:'personal_detail_content_c_name',
                                cls:'personal_detail_content_c_name',
                                html:'<div class="personal_detail_my_order">姓名:<span></span></div>'
                            }
                        ]

                    },
//菜品
                    {
                        flex:1,
                        cls:'personal_detail_content_top',
                        style:'background-color:#fff',
                        layout:{
                            type:'vbox',//vbox纵向,hbox横向
                        },
                        items:[

                            {
                                flex:1,
                                xtype:'panel',
                                id:'personal_detail_content_dish',
                                cls:'personal_detail_content_dish',
                                html:''
                            },

                        ]

                    },
//订单金额
                    {
                        flex:1,
                        cls:'personal_detail_content_top',
                        style:'background-color:#fff;',
                        layout:{
                            type:'vbox',//vbox纵向,hbox横向
                        },
                        items:[

                            {
                                flex:1,
                                xtype:'panel',
                                id:'personal_detail_content_price',
                                cls:'',
                                html:''
                            }
                        ]

                    },



                ]
            },
            //个人头像大框
            {
                id:'personal_detail_button',
                xtype:'button',
                cls:'personal_detail_button',
                text:'立即评价'
            }
        ]
    }
});

