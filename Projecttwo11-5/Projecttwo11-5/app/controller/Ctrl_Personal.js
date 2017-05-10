/**
 * Created by lzhan on 16/10/10.
 */
Ext.define('private_cooker.controller.Ctrl_Personal', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
                personalview: {
                    selector: 'personal',
                    xtype: 'personal',
                    autoCreate: true
                },
                btnMain:'#btn_backmain_personal',
                Order_Personal:'#order_more_personal',
                Collect_Personal:'#collect_more_personal',
               Address_more_personal:'#address_more_personal',
            cooker_more_personal:'#cooker_more_personal',
            header_personal:'#header_personal',
            account_more_personal:'#account_more_personal'
            },
        control:{
            btnMain:{
                tap:'func_show_main'
            },
            Order_Personal:{
                tap:'func_show_order_personal'
            },
            Collect_Personal:{
                tap:'func_show_collect_personal'
            },
            Address_more_personal:{
                tap:'func_show_address_personal'
            },
            cooker_more_personal:{
                tap:'fun_cooker_more_personal'
            },
            account_more_personal:{
                tap:'fun_account_more_personal'
            },
            header_personal:{
                change:'fun_header_personal'
            }
        },
        routes:{
            'route_personal':'showPersonal'
        }
    },
    showPersonal:function () {
        Ext.Viewport.setActiveItem(this.getPersonalview().setActiveItem(0));

    if(localStorage.getItem('userid')){
    $.ajax({
        type: 'get',
        url: private_cooker.util.Tools.getDomain()+'/header',
        data:{u_telephone:localStorage.getItem('userid')},
        dataType:'json',
        success: function (result) {
            Ext.getCmp('header_personal').setHtml('<div class="html_header_personal"><img src="'+private_cooker.util.Tools.getDomain()+'/headers/'+result.res01[0].user_icon+'"></div>');
            Ext.getCmp('id_personal').setHtml('<div>ID:'+localStorage.getItem("userid")+'</div>');
        },
        error: function (error) {
            alert('error!!!!');

        }

    });



}

    },
    func_show_main:function () {
        this.redirectTo('route_main');
    },
    func_show_order_personal:function(){

        this.redirectTo('route_order_personal');
    },
    func_show_collect_personal:function(){
        this.redirectTo('route_collect_personal');
    },
    func_show_address_personal:function(){
        sessionStorage.setItem('route','route_personal');
        this.redirectTo('route_address_personal');
    },
    fun_cooker_more_personal:function(){
        this.redirectTo('route_cooker_personal');
    },
    fun_account_more_personal:function(){
        this.redirectTo('route_personal_myaccount');
    }

});
//