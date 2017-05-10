/**
 * Created by lzhan on 16/10/10.
 */
Ext.define('private_cooker.controller.Ctrl_Myaccount_Personal', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
                myaccountview: {
                    selector:'myaccount_personal',
                    xtype:'myaccount_personal',
                    autoCreate: true
                },
         btn_back_personal_myaccount:'#btn_back_personal_myaccount',
         account_more_change_password:'#account_more_change_password',
         personal_change_more_header:'#personal_change_more_header',
            quit_login:'#quit_login',
            },
        control:{
     btn_back_personal_myaccount:{
                tap:'func_btn_back_personal_myaccount'
            },
      account_more_change_password:{
         tap:'func_account_more_change_password'
     },
    personal_change_more_header:{
        tap:'func_personal_change_more_header'
    },
    quit_login:{
                tap:'func_quit_login'
            },
        },
        routes: {
            'route_personal_myaccount': 'showpersonal_myaccount'
        }
    },
    showpersonal_myaccount:function () {
        Ext.Viewport.setActiveItem(this.getMyaccountview());
        Ext.getCmp('account_account_more').setHtml('<div class="account_account_more_userid">'+localStorage.getItem("userid")+'</div>')
    },
    func_btn_back_personal_myaccount:function () {
        this.redirectTo('route_personal');
    },
    func_account_more_change_password:function(){
        this.redirectTo('route_change_password_personal');
    },
    func_personal_change_more_header:function(){
        this.redirectTo('route_change_header_personal');
    },
    func_quit_login:function(){
        localStorage.removeItem('userid');
        this.redirectTo('route_main');
    },
    fun_header_personal:function(){
       
        // var formdata=new FormData(Ext.getDom('change_header_personal'));
        // $.ajax({
        //     type: 'post',
        //     url: private_cooker.util.Tools.getDomain()+'/change_header',
        //     data:formdata,
        //     // dataType:'json',
        //     async:false,
        //     cache:false,
        //     contentType:false,
        //     processData:false,
        //     success: function (result) {
        //         // console.log('res'+JSON.stringify(result.datas));
        //         Ext.Msg.alert('修改成功');
        //         Ext.getCmp('header_personal').setHtml('<div class="html_header_personal"><img src="http://10.40.7.21:3000/headers/'+result.res01[0].user_icon+'"></div>');
        //
        //     },
        //     error: function (error) {
        //         alert('error!!!!');
        //
        //     }
        //
        // });
    }
});
//