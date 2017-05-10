/**
 * Created by Administrator on 2016/10/19.
 */
Ext.define('private_cooker.view.Service',{
    extend: 'Ext.Panel',
    xtype: 'service',
    requires:[
        'Ext.TitleBar'
    ],
    config: {
        id:'service_view',
        scrollable:true,
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '服务说明',
                cls:'service_topbar',
                items:[
                    {
                        cls:'service_back',
                        xtype:'button',
                        id:'service_back_main',
                        iconCls:'back_cooker',
                        align:'left'
                        // html:'<img src="resources/images/back.png" class="service_back_img"/>'
                    }
                ]
            },
            {
                xtype:'panel',
                height:'100%',
                style:'padding:30px 10px 0 10px;',
                items:[
                    {
                        xtype:'img',
                        html:'<img src="resources/images/service.png" style="width:100%"/>'
                    }
                ]
            }
           ]
    }
});