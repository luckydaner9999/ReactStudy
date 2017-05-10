/**
 * Created by Administrator on 2016/10/23.
 */
Ext.define('private_cooker.view.Pay',{
    extend: 'Ext.Panel',
    xtype: 'pay',
    requires:[
        'Ext.TitleBar',
        'Ext.form.Panel'
    ],
    config: {
        id:'pay_view',
        items: [
            {
                id:'pay',
                height:'100%',
                scrollable:true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '支付',
                        cls:'pay_topbar',
                        items:[
                            {
                                xtype:'button',
                                id:'pay_back_private',
                               iconCls:'back_cooker',
                                align:'left'
                                // html:'<img src="resources/images/back.png" class="pay_back_img"/>'
                            }
                            ]
                    },
                    {
                        xtype:'panel',
                        id:'pay_info_confirm'
                    }
                ]
            },
            /*bottom*/
            {
                docked:'bottom',
                xtype:'panel',
                layout:'hbox',
                cls:'pay_bottom',
                items:[
                    {
                        xtype:'panel',
                        flex:3,
                        id:'pay_money'

                    },
                    {
                        xtype:'button',
                        id:'pay_go_myorder',
                        cls:'pay_btn',
                        flex:1,
                        text:'立即支付'
                    }]
            }
            /*bottom*/
        ]
    }
})