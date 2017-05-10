Ext.define('private_cooker.view.Myaccount_Personal', {
    extend: 'Ext.Panel',
    xtype: 'myaccount_personal',
    requires: [
        'Ext.TitleBar',

    ],
    config: {

        layout:{
            type:'vbox',//vbox纵向,hbox横向
        },
        items: [
            {
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype:'titlebar',
                    title:'用户信息',
                    cls:'tool_bar_personal',
                    items:[
                        {
                            cls:'btn_backmain_personal',
                            xtype:'button',
                            id:'btn_back_personal_myaccount',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="private_back_img">'
                        }
                    ]
                }
            },
            {
                flex:1,
                
                cls:'cs_order_personal',
                style:'background-color:#e7fe7e7;',
                items:[
                    {
                        flex:1,

                        cls:'in_account',
                        layout:{
                            type:'hbox',//vbox纵向,hbox横向
                        },
                        items:[
                            {
                                flex:2,
                                cls:'text_account',
                                html:'<div class="my_order">用户名</div>',
                            },
                            {
                                flex:3,
                                xtype:'button',
                                cls:'account_account_more',
                                id:'account_account_more',
                                html:'<div class="account_account_more_userid">'+localStorage.getItem("userid")+'</div>'

                            },
                        ]

                    },

                ]
            } ,
            {
                flex:1,
                cls:'cs_order_personal',
                style:'background-color:#e7e7e7;',
                items:[
                    {
                        flex:1,
                        cls:'in_order_personal',
                        layout:{
                            type:'hbox',//vbox纵向,hbox横向
                        },
                        items:[
                            {
                                flex:2,
                                cls:'text_account',
                                html:'<div class="my_order">修改密码</div>',
                            },
                            {
                                flex:3,
                                xtype:'button',
                                cls:'account_more_hasicon',
                                id:'account_more_change_password'
                            },
                        ]

                    },

                ]
            } ,
            {
                flex:1,
                cls:'cs_order_personal',
                style:'background-color:#e7e7e7;',
                items:[
                    {
                        flex:1,

                        cls:'in_account',
                        layout:{
                            type:'hbox',//vbox纵向,hbox横向
                        },
                        items:[
                            {
                                flex:2,

                                cls:'text_account',
                                html:'<div class="my_order">修改头像</div>',
                            },
                            {
                                flex:3,
                                xtype:'button',
                                cls:'account_more_hasicon',
                                id:'personal_change_more_header',
                            },
                        ]

                    },

                ]
            } ,
            {
                flex:1,
                xtype:'button',
                cls:'quit_login',
                id:'quit_login',
                html:'退出登录'
            },
            {
                flex:5,
            }
/*            {
                xtype:'formpanel',
                id:'form_personal_comment',
                height:'600px',
                border:'1px solid red',
                items:[
                    {
                        xtype:'fieldset',
                        title:'',
                        items:[

                            {
                                xtype:'textfield',
                                cls:'comment_personal_u_t',
                                name:'u_t',
                                height:'0px',
                                value:localStorage.getItem('userid'),
                            },
                            {
                                xtype: 'filefield',
                                label: "上传照片:",
                                id:'comment_upload_image',
                                name: 'fileImage',
                                accept: 'image',

                            },

                        ]
                    },{
                        xtype: 'button',
                        text: '提交评价',
                        cls:'comment_personal_button',
                        id:'comment_personal_button',

                    },

                ]
            }*/
        ]
    }
});




