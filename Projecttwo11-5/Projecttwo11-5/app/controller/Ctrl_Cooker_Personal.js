/**
 * Created by lzhan on 16/10/10.
 */
Ext.define('private_cooker.controller.Ctrl_Cooker_Personal', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
                cookerview: {
                    selector: 'cooker_personal',
                    xtype: 'cooker_personal',
                    autoCreate: true
                },
            btn_back_cooker_personal:'#btn_back_cooker_personal',

            },
        control:{
            btn_back_cooker_personal:{
                tap:'func_show_cooker'
            },
        },
        routes: {
            'route_cooker_personal': 'showCookerPersonal'
        }

    },
    showCookerPersonal:function () {
        Ext.Viewport.setActiveItem(this.getCookerview());
    },
    func_show_cooker:function () {
        this.redirectTo('route_personal');
    }
});
//