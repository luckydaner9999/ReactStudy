Ext.define('private_cooker.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'private_cooker.view.Login',
        'private_cooker.view.Private'
    ],
    config: {
        tabBarPosition: 'bottom',
        id:'main_view',
        activeItem:0,
//主页
        items: [
            /*首页start*/
            {
                iconCls: 'index',
                id:'index_main',
                scrollable:true,
                title:'首页',
                indicators: false,
                styleHtmlContent: true,
                html:[].join(""),
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '私人厨师',
                        cls:'main_topbar',
                        items:[
                            {
                                cls:'main_position',
                                xtype:'panel',
                                html:'<img src="resources/images/position.png" class="main_locate_img"/><span class="main_locate_city">苏州</span>'
                            },
                            {
                                xtype:'button',
                                cls:'main_service',
                                id:'main_service_explain',
                                html:'<a style="color: #333;line-height: 30px">服务说明</a>',
                                align:'right'
                            }]
                    },
                    {
                        xtype:'panel',
                        id:'main_panel_scroll',
                        items:[
                            /*banner start*/
                            {
                                xtype:'carousel',
                                id:'banner_play',
                                height:'200px',
                                direction:'horizontal',
                                directionLock:true,
                                cls:'main_banner',
                                items:[
                                    {
                                        xtype:'img',
                                        cls:'main_banner_img',
                                        src:'resources/images/banner-3.png'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/banner-1.png',
                                        cls:'main_banner_img'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/banner-2.png',
                                        cls:'main_banner_img'
                                    }
                                ],
                                delay:3000,
                                start:true,
                                listeners:{
                                    listeners: {
                                        tap: {
                                            fn: function () {
                                                this.pause();
                                            },
                                            element: 'element'
                                        },
                                        swipe: {
                                            fn: function () {
                                                this.start();
                                            },
                                            element: 'innerElement'
                                        }
                                    }
                                },
                                initialize: function () {
                                    if (this.config.start) {
                                        this.start();
                                    }
                                },
                                rotate: function () {
                                    if (this.timeout) {
                                        clearTimeout(this.timeout);
                                    }
                                    if (this.getActiveIndex() === this.getMaxItemIndex()) {
                                        this.setActiveItem(0, 'slide');
                                    } else {
                                        this.next();
                                    }
                                    this.timeout = Ext.defer(this.rotate, this.config.delay, this);
                                },
                                start: function (delayStart) {
                                    this.timeout = Ext.defer(this.rotate, delayStart || this.config.delay, this);
                                },
                                pause: function (delayStart) {
                                    if (this.timeout) {
                                        clearTimeout(this.timeout);
                                    }
                                    if (delayStart) {
                                        this.start(delayStart);
                                    }
                                    return this;
                                },
                                stop: function (delayStart) {
                                    this.pause(delayStart);
                                    this.setActiveItem(0, 'slide');
                                    return this;
                                }
                            },
                            /*banner end*/
                            /*cuisine start*/
                            {
                                xtype : 'panel',
                                cls:'main_cuisine_css',
                                layout:'hbox',
                                items:[
                                    {
                                        xtype:'img',
                                        id:'guanfu',
                                        flex:1,
                                        html:'<div class="main_cuisine"><img src="resources/images/cuisine_guanfu.png"><p style="color: black">官府</p></div>'
                                    },
                                    {
                                        xtype:'img',
                                        flex:1,
                                        id:'qingzhen',
                                        html:'<div class="main_cuisine"><img src="resources/images/cuisine_qingzhen.png"><p>清真</p></div>'
                                    },
                                    {
                                        xtype:'img',
                                        id:'yangsheng',
                                        flex:1,
                                        html:'<div class="main_cuisine"><img src="resources/images/cuisine_yangsheng.png"><p>养生</p></div>'
                                    },
                                    {
                                        xtype:'img',
                                        id:'jiachang',
                                        flex:1,
                                        html:'<div class="main_cuisine"><img src="resources/images/cuisine_jiachang.png"><p>家常</p></div>'
                                    }]
                            },
                            /*cuisine end*/
                            /*热门套餐 start*/
                            {
                                xtype:'panel',
                                cls:'main_private_order',
                                layout:'vbox',
                                items:[
                                    {
                                        xtype:'panel',
                                        html:'<div class="main_private_title"><span>热门 | 私人订制</span></div>'
                                    },
                                    {
                                        xtype:'img',
                                        id:'main_hot_private_meal1',
                                        cls:'main_hot_private',
                                        src:'resources/images/private_meal1.png',
                                        style:'background-size:cover'
                                    },
                                    {
                                        xtype:'img',
                                        id:'main_hot_private_meal2',
                                        cls:'main_hot_private',
                                        src:'resources/images/private_meal4.png',
                                        style:'background-size:cover'
                                    }]
                            },
                            /*热门套餐 end*/
                            /*热门厨师 start*/
                            {
                                xtype:'panel',
                                cls:'main_private_cooker',
                                layout:'vbox',
                                items:[
                                    {
                                        xtype:'panel',
                                        html:'<div class="main_private_title"><span>热门 | 私人厨师</span></div>'
                                    },
                                    {
                                        xtype:'img',
                                        id:'cooker2',
                                        cls:'main_hot_private',
                                        src:'resources/images/hot-cooker1.jpg',
                                        style:'background-size:cover'
                                    },
                                    {
                                        xtype:'img',
                                        id:'cooker3',
                                        cls:'main_hot_private',
                                        src:'resources/images/hot-cooker2.jpg',
                                        style:'background-size:cover'
                                    }]
                            }
                            /*热门厨师 end*/
                        ]
                    }
                ]
            },
            /*首页end*/
 //厨师
            /*厨师*/
            {
                iconCls:'cooker',
                id:'cooker',
                title:'厨师'
            },
            /*厨师*/
//订单
            /*私人订制 start*/
            {
                iconCls:'private',
                id:'private_quote',
                title:'订制'
            },
            /*私人订制 end*/
            //个人中心
            {
                iconCls: 'my_center',
                id:'personal_main',
                title:'我的'
            }
        ]
    }
});
