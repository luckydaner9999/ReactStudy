
Ext.define('private_cooker.view.Cooker_order', {
    extend: 'Ext.Panel',
    xtype: 'cooker_order',
    requires: [
        'Ext.TitleBar',
        'Ext.data.JsonP'
    ],
    config: {
        height:'100%',
        // style:'position:absolute',
        scrollable:true,
         items:[
             {
        docked: 'top',
        xtype: 'titlebar',
        title: '确认信息',
        items: {
            xtype:'button',
            align: 'left',
            id:'back_dishes',
            iconCls:'back_cooker',
            cls:'details_topbar'
        }

    },
             {
                 xtype:'panel',
                 id:'cooker_order_list',
                 height:'100%'
             },
             {
                 docked:'bottom',
                 xtype:'button',
                 id:'confirm_o_btn',
                 html:'<span class="sure">确认订单</span>',
                 cls:'sure_order'
             },


]
    }
});
