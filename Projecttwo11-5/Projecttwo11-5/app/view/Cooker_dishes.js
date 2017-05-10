
Ext.define('private_cooker.view.Cooker_dishes', {
    extend: 'Ext.Panel',
    xtype: 'cooker_dishes',
    requires: [
        'Ext.TitleBar',
        'Ext.data.JsonP'
    ],
    config: {
        height:'100%',
         items:[
        {
        docked: 'top',
        xtype: 'titlebar',
        title: '选择菜品',
        items: {
            xtype:'button',
            align: 'left',
            id:'back_details',
            iconCls:'back_cooker',
            cls:'details_topbar'
        }

    },
        {
        xtype: 'fieldset',
        cls:'s_dishes',
        items: [
            {
                xtype: 'searchfield',
                id:'s_dishes',
                name: 'query',
                placeHolder:'请输入菜名'
            }
        ]
    },
        {
                 xtype:'dataview',
                 scrollable:null,
                 id:'s_details',
                 height:'15%'
             },
        {
                 xtype:'list',
                 width:'100%',
                 id:'dishes_name',
                 height:'75%'
             },
        {
                 docked: 'bottom',
                 xtype: 'panel',
                 id:'chose_dishes_panel',
                 cls:'chose_dishes_panel',
                 layout:{
                     type:'hbox'
                },
                 items:[
                {
                flex:4,
                xtype:'panel',
                id:'cart_panel',
                html:'<div class="dishes_cart"> ' +
                   '<img src="resources/images/cart.png" alt="">'+
                '</div>'

               },
               {
                flex:1,
                xtype:'button',
                html:'<span style="color: white">去下单</span>',
                cls:'go_order_btn',
                id:'go_order_btn'
              }]
             }]
    }
});
