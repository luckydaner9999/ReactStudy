/**
 * Created by Administrator on 2016/10/19.
 */
Ext.define('private_cooker.view.Private',{
    extend: 'Ext.Panel',
    xtype: 'private',
    requires:[
        'Ext.TitleBar'
    ],
    config: {
         iconCls:'private',
        /* id:'private_quote',*/
        title:'订制',
        id:'private_view',
        height:'100%',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '私人订制',
                cls:'private_topbar',
                items:[
                    {
                        cls:'private_back',
                        xtype:'button',
                        id:'private_back_main',
                        iconCls:'back_cooker',
                        align:'left'
                        // html:'<img src="resources/images/back.png" class="private_back_img"/>'
                    }
                    ]
            },
            {
                xtype:'carousel',
                cls:'private_banner_carousel',
                direction:'horizontal',
                items:[
                    {
                        xtype:'img',
                        src:'resources/images/private_banner1.png',
                        id:'private_banner_1',
                        style:'background:cover'
                    },
                    {
                        xtype:'img',
                        src:'resources/images/private_banner3.png',
                        id:'private_banner_2',
                        style:'background:cover'
                    },
                    {
                        xtype:'img',
                        src:'resources/images/private_banner4.png',
                        id:'private_banner_3',
                        style:'background:cover'
                    },
                    {
                        xtype:'img',
                        src:'resources/images/private_banner2.png',
                        id:'private_banner_4',
                        style:'background:cover'
                    }
                ]
            }]
    }
});