/**
 * Created by Administrator on 2016/10/19.
 */
Ext.define('private_cooker.view.Privatemeal',{
    extend: 'Ext.Panel',
    xtype: 'privatemeal',
    requires:[
        'Ext.TitleBar'
    ],
    config: {
        id:'privatemeal_view',
        height:'100%',
        xtype:'panel',
        layout:{
            type:'card'
        },
        items:[
            {
                id:'private_meal_1',
                items:[
                    /*topbar*/
                    {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '私人订制',
                    cls:'privatemeal_topbar',
                    items:[
                        {
                            xtype:'button',
                            id:'privatemeal1_back_private',
                            cls:'privatemeal_back',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="privatemeal_back_img"/>'
                        }
                    ]
                    },
                    /*topbar*/

                    {
                        xtype:'panel',
                        scrollable:true,
                        height:'100%',
                        items:[
                            /*dataview*/
                            {
                                xtype:'dataview',
                                id:'private_menu_list',
                                scrollable:null,
                                height:'100%'
                            },
                            /*dataview*/
                            /*carousel*/
                            {
                                xtype:'carousel',
                                id:'private_banner_carousel',
                                cls:'private_banner_carousel',
                                direction:'horizontal',
                                directionLock:true,
                                height:200,
                                style:'padding:0;',
                                items:[
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish1.png',
                                        id:'private1_dish1',
                                        style:'background:cover;'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish2.png',
                                        id:'private1_dish2',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish3.png',
                                        id:'private1_dish3',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish4.png',
                                        id:'private1_dish4',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish5.png',
                                        id:'private1_dish5',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish6.png',
                                        id:'private1_dish6',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish7.png',
                                        id:'private1_dish7',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish8.png',
                                        id:'private1_dish8',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private1_dish9.png',
                                        id:'private1_dish9',
                                        style:'background:cover'
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
                            /*carousel*/
                            /*service*/
                            {
                                xtype:'panel',
                                height:'100%',
                                id:'private_meal1_service'
                            }
                            /*service*/
                        ]
                    },

                    /*bottom*/
                    {
                        docked:'bottom',
                        xtype:'panel',
                        layout:'hbox',
                        cls:'private_meal_bottom',
                        items:[
                            {
                                xtype:'dataview',
                                flex:3,
                                id:'menuprice'
                            },
                            {
                                xtype:'button',
                                id:'private_meal_go_order1',
                                cls:'private_meal_btn',
                                flex:1,
                                text:'立即预订'
                            }]
                    }
                    /*bottom*/
                ]
            },
            {
                id:'private_meal_2',
                items:[
                    {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '私人订制',
                    cls:'privatemeal_topbar',
                    items:[
                        {
                            xtype:'button',
                            id:'privatemeal2_back_private',
                            cls:'privatemeal_back',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="privatemeal_back_img"/>'
                        }
                    ]
                    },
                    {
                        xtype:'panel',
                        scrollable:true,
                        height:'100%',
                        items:[
                            /*dataview*/
                            {
                                xtype:'dataview',
                                id:'private_menu2_list',
                                scrollable:null,
                                height:'100%'
                            },
                            /*dataview*/
                            /*carousel*/
                            {
                                xtype:'carousel',
                                cls:'private_banner_carousel',
                                direction:'horizontal',
                                directionLock:true,
                                height:200,
                                style:'padding:0;',
                                items:[
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish1.png',
                                        id:'private2_dish1',
                                        style:'background:cover;'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish2.png',
                                        id:'private2_dish2',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish3.png',
                                        id:'private2_dish3',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish4.png',
                                        id:'private2_dish4',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish5.png',
                                        id:'private2_dish5',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish6.png',
                                        id:'private2_dish6',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish7.png',
                                        id:'private2_dish7',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish8.png',
                                        id:'private2_dish8',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private2_dish9.png',
                                        id:'private2_dish9',
                                        style:'background:cover'
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
                            /*carousel*/
                            /*service*/
                            {
                                xtype:'panel',
                                height:'100%',
                                id:'private_meal2_service'
                            }
                            /*service*/
                        ]
                    },
                    {
                        docked:'bottom',
                        xtype:'panel',
                        layout:'hbox',
                        cls:'private_meal_bottom',
                        items:[
                            {
                                xtype:'dataview',
                                flex:3,
                                id:'menuprice2'
                            },
                            {
                            xtype:'button',
                            id:'private_meal_go_order2',
                            cls:'private_meal_btn',
                            flex:1,
                            text:'立即预订'
                            }]
                    }
                ]
            },
            {
                id:'private_meal_3',
                items:[
                    {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '私人订制',
                    cls:'privatemeal_topbar',
                    items:[
                        {
                            xtype:'button',
                            id:'privatemeal3_back_private',
                            cls:'privatemeal_back',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="privatemeal_back_img"/>'
                        }
                    ]
                    },
                    {
                        xtype:'panel',
                        scrollable:true,
                        height:'100%',
                        items:[
                            /*dataview*/
                            {
                                xtype:'dataview',
                                id:'private_menu3_list',
                                scrollable:null,
                                height:'100%'
                            },
                            /*dataview*/
                            /*carousel*/
                            {
                                xtype:'carousel',
                                cls:'private_banner_carousel',
                                direction:'horizontal',
                                directionLock:true,
                                height:200,
                                style:'padding:0;',
                                items:[
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish1.png',
                                        id:'private3_dish1',
                                        style:'background:cover;'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish2.png',
                                        id:'private3_dish2',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish3.png',
                                        id:'private3_dish3',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish4.png',
                                        id:'private3_dish4',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish5.png',
                                        id:'private3_dish5',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish6.png',
                                        id:'private3_dish6',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish7.png',
                                        id:'private3_dish7',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish8.png',
                                        id:'private3_dish8',
                                        style:'background:cover'
                                    },
                                    {
                                        xtype:'img',
                                        src:'resources/images/private3_dish9.png',
                                        id:'private3_dish9',
                                        style:'background:cover'
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
                            /*carousel*/
                            /*service*/
                            {
                                xtype:'panel',
                                height:'100%',
                                id:'private_meal3_service'
                            }
                            /*service*/
                        ]
                    },
                    {
                        docked:'bottom',
                        xtype:'panel',
                        layout:'hbox',
                        cls:'private_meal_bottom',
                        items:[
                            {
                                xtype:'dataview',
                                flex:3,
                                id:'menuprice3'
                            },
                            {
                            xtype:'button',
                            id:'private_meal_go_order3',
                            cls:'private_meal_btn',
                            flex:1,
                            text:'立即预订'
                            }]
                    }
                ]
            },
            {
                id:'private_meal_4',
                items:[
                    {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '私人订制',
                    cls:'privatemeal_topbar',
                    items:[
                        {
                            xtype:'button',
                            id:'privatemeal4_back_private',
                            cls:'privatemeal_back',
                            iconCls:'back_cooker',
                            align:'left'
                            // html:'<img src="resources/images/back.png" class="privatemeal_back_img"/>'
                        }
                    ]
                    },
                    {
                        xtype:'panel',
                        height:'100%',
                        scrollable:true,
                        items:[
                            {
                                layout:'vbox',
                                items:[
                                    {
                                        xtype:'dataview',
                                        id:'private_menu4_list',
                                        scrollable:null,
                                        height:'100%'
                                    },
                                    {
                                    xtype:'carousel',
                                    cls:'private_banner_carousel',
                                    direction:'horizontal',
                                    directionLock:true,
                                    height:200,
                                    style:'padding:0;',
                                    items:[
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish1.png',
                                            id:'private4_dish1',
                                            style:'background:cover;'
                                        },
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish2.png',
                                            id:'private4_dish2',
                                            style:'background:cover'
                                        },
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish3.png',
                                            id:'private4_dish3',
                                            style:'background:cover'
                                        },
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish4.png',
                                            id:'private4_dish4',
                                            style:'background:cover'
                                        },
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish5.png',
                                            id:'private4_dish5',
                                            style:'background:cover'
                                        },
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish6.png',
                                            id:'private4_dish6',
                                            style:'background:cover'
                                        },
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish7.png',
                                            id:'private4_dish7',
                                            style:'background:cover'
                                        },
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish8.png',
                                            id:'private4_dish8',
                                            style:'background:cover'
                                        },
                                        {
                                            xtype:'img',
                                            src:'resources/images/private4_dish9.png',
                                            id:'private4_dish9',
                                            style:'background:cover'
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
                                    {
                                        xtype:'panel',
                                        height:'100%',
                                        id:'private_meal_service'
                                    }]
                            }]
                    },
                    {
                        docked:'bottom',
                        xtype:'panel',
                        layout:'hbox',
                        cls:'private_meal_bottom',
                        items:[
                            {
                                xtype:'dataview',
                                flex:3,
                                id:'menuprice4'
                            },
                            {
                            xtype:'button',
                            id:'private_meal_go_order4',
                            cls:'x-button-label private_meal_btn',
                            flex:1,
                            text:'立即预订'
                            }]
                    }
                ]
            }
         ]
    }
});