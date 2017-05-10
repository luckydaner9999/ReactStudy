/**
 * Created by Administrator on 2016/10/18.
 */

Ext.define('private_cooker.controller.Ctrl_Login', {
    extend: 'Ext.app.Controller',
    requires:[
        'private_cooker.model.Model_User',
        'private_cooker.util.Tools'
    ],
    init:function () {
        // Ext.getCmp('btn_go').setText('gogogo');
    },
    config: {
        refs: {
            loginview: {
                selector: 'login',
                xtype: 'login',
                autoCreate: true
            },
            _login:'#login_view',
            login_back_main:'#login_back_main',
            btnSubmit:'#btn_login',
            btnSub:'#btn_login_1',
            login_go_register:'#login_go_register',
            telephone:'#telephone',
            password:'#txt_password'
        },
        control:{
            btnSubmit:{
                tap:'func_submit'
            },
            btnSub:{
                tap:'func_sub'
            },
            _login:{
                activeitemchange:'changeItem'
            },
            login_back_main:{
                tap:'login_back_main'
            },
            login_go_register:{
                tap:'login_go_register'
            },
            telephone:{
                change:'telephone_valid'
            },
            password:{
                change:'password_valid'
            }
        },
        routes: {
            'route_login': 'showLogin'
        }
    },
    showLogin:function () {
        Ext.Viewport.setActiveItem(this.getLoginview().setActiveItem(1))
    },
    changeItem:function (obj,item) {
        if(item.getId()=='main_view'){
            this.redirectTo('route_main');
        }
    },
    login_back_main:function (s, e, eOpts) {
        this.redirectTo('route_main');
    },
    telephone_valid:function (item,newValue,oldValue,eOpts) {
        if(!(/^1[34578]\d{9}$/.test(newValue))){
            swal("请填入正确的手机号","","warning");
        }
        if(newValue.length==null){
            swal("手机号不能为空","","warning");
        }
    },
    password_valid:function (item,newValue,oldValue,eOpts) {
        if(newValue.length<6){
            swal("密码大于6位","","warning");
        }
    },
    func_sub:function () {

        //获取表单数据
        var login_loop=this;
        var userinfo=Ext.getCmp('login_form').getValues();
       /* var telephone=Ext.getCmp('telephone').getValue();
        var password=Ext.getCmp('txt_password').getValue();*/
            $.ajax({
                type: 'post',
                url: private_cooker.util.Tools.getDomain() + '/go_login',
                data: userinfo,
                dataType: 'json',
                success: function (result) {
                    if (result.res == 0) {
                        // Ext.Msg.alert("用户名或密码错误");
                        swal("用户名或密码错误", "", "error");
                    } else {
                        var s = Ext.getCmp('telephone').getValue();
                        localStorage.setItem('userid', s);
                        login_loop.redirectTo(sessionStorage.getItem('route'));
                    }
                },

                error: function (error) {
                    alert('error');
                }

                // }

            })

    },
    login_go_register:function () {
        this.redirectTo('route_register')
    }
});
