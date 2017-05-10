/**
 * Created by Administrator on 2016/10/18.
 */

Ext.define('private_cooker.controller.Ctrl_Private', {
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
                selector: 'private',
                xtype: 'private',
                autoCreate: true
            },
            _private:'#private_view',
            private_back_main:'#private_back_main',
            private_banner_1:'#private_banner_1',
            private_banner_2:'#private_banner_2',
            private_banner_3:'#private_banner_3',
            private_banner_4:'#private_banner_4'
        },
        control:{
            _private:{
                activeitemchange:'changeItem'
            },
            private_back_main:{
                tap:'private_back_main'
            },
            private_banner_1:{
                tap:'private_to_meal1'
            },
            private_banner_2:{
                tap:'private_to_meal2'
            },
            private_banner_3:{
                tap:'private_to_meal3'
            },
            private_banner_4:{
                tap:'private_to_meal4'
            },
        },
        routes: {
            'route_private': 'showPrivate'
        }
    },
    showPrivate:function () {
        Ext.Viewport.setActiveItem(this.getPrivateview().setActiveItem(2))
    },
    changeItem:function (obj,item) {
        if(item.getId()=='main_view'){
            this.redirectTo('route_main');
        }
    },
    private_back_main:function (s, e, eOpts) {
        this.redirectTo('route_main');
    },
    private_to_meal1:function () {
        this.redirectTo('route_privatemeal1');
    },
    private_to_meal2:function () {
        this.redirectTo('route_privatemeal2');
    },
    private_to_meal3:function () {
        this.redirectTo('route_privatemeal3');
    },
    private_to_meal4:function () {
        this.redirectTo('route_privatemeal4');
    }
});