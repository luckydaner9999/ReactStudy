/**
 * Created by Administrator on 2016/10/18.
 */

Ext.define('private_cooker.controller.Ctrl_Service', {
    extend: 'Ext.app.Controller',
    requires:[
        /*'private_cooker.model.Model_User',*/
        'private_cooker.util.Tools'
    ],
    init:function () {
        // Ext.getCmp('btn_go').setText('gogogo');
    },
    config: {
        refs: {
            privateview: {
                selector: 'service',
                xtype: 'service',
                autoCreate: true
            },
            _service:'#service_view',
            service_back_main:'#service_back_main'
        },
        control:{
            _service:{
                activeitemchange:'changeItem'
            },
            service_back_main:{
                tap:'service_back_main'
            }
        },
        routes: {
            'route_service': 'showService'
        }
    },
    showService:function () {
        Ext.Viewport.setActiveItem(this.getPrivateview())
    },
    service_back_main:function (s, e, eOpts) {
        this.redirectTo('route_main');
    }
});