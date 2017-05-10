Ext.define('private_cooker.view.Cooker_details', {
    extend: 'Ext.Panel',
    xtype: 'cooker_details',
    requires: [
        'Ext.TitleBar'
    ],
    config: {

                 items:[
                     {
                         id:'cookers_details_view',
                         scrollable:true,
                         height:'100%',
                         items:[
                             {
                                 docked: 'top',
                                 xtype: 'titlebar',
                                 cls:'cooker_detail_topbar',
                                 title: '厨师详情',
                                 items: [
                                     {
                                         xtype:'button',
                                         iconCls:'back_cooker',
                                         id:'back_cookers',
                                         align:'left'
                                     },
                                     {
                                         xtype:'button',
                                         align: 'right',
                                         iconCls:'cancel_collect',
                                         id:'details_collect'
                                     }
                                 ]
                             },
                             {
                                 xtype:'panel',
                                 id:'details_cooker',
                                 height:280,
                                 cls:'cooker_detail_dish_img',
                                 items:[
                                     {
                                         xtype:'carousel',
                                         id:'cooker_img',
                                         direction:'horizontal',
                                         directionLock:true,
                                         height:'180px',
                                         items: [
                                             {
                                                 xtype:'panel',
                                                 id:'panel1'
                                             },
                                             {
                                                 xtype:'panel',
                                                 id:'panel2'

                                             },
                                             {
                                                 xtype:'panel',
                                                 id:'panel3'

                                             },
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
                                         id:'self_details',
                                         height:'100px'
                                     }
                                 ]
                             },
                             {
                                 xtype:'panel',
                                 id:'comment_total'
                             },
                             {
                                 xtype:'dataview',
                                 id:'comment_details',
                                 scrollable:null,
                                 height:'100%',
                                 cls:'comment_details'

                             },
                             {
                                 xtype:'button',
                                 id:'chose_dishes_btn',
                                 docked: 'bottom',
                                 text:'选菜预订',
                                 cls:'chose_dishes_btn'
                             }
                         ]
                     },



                 ]


    }
});
