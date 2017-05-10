/**
 * Created by Administrator on 2016/10/18.
 */

Ext.define('private_cooker.controller.Ctrl_Register', {
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
            registerview: {
                selector: 'register',
                xtype: 'register',
                autoCreate: true
            },
            _register:'#register_view',
            register_back_main:'#register_back_main',
            btnReg:'#btn_register_1',
            telephone:'#reg_telephone',
            password:'#reg_password'
        },
        control:{
            btnReg:{
                tap:'func_reg'
            },
            _register:{
                activeitemchange:'changeItem'
            },
            register_back_main:{
                tap:'register_back_main'
            },
            telephone:{
                change:'telephone_valid'
            },
            password:{
                change:'password_valid'
            }
        },
        routes: {
            'route_register': 'showRegister'
        }
    },
    showRegister:function () {
        Ext.Viewport.setActiveItem(this.getRegisterview())
    },
    register_back_main:function (s, e, eOpts) {
        this.redirectTo('route_login');
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
    func_reg:function () {
        //获取表单数据
        var userinfo=Ext.getCmp('register_form').getValues();
        //和Model 绑定
        // var check=Ext.create('private_cooker.model.Model_User',userinfo);
        //验证
       /* var errors=check.validate();
        if(errors.isValid()){*/
            var reg_telephone=Ext.getCmp('reg_telephone').getValue();
            var first_password=Ext.getCmp('reg_password').getValue();
            var second_password=Ext.getCmp('reg_password_confirm').getValue();
            if(/^1[34578]\d{9}$/.test(reg_telephone)&& first_password==second_password){
                var register_loop=this;
                $.ajax({
                    type: 'post',
                    url:private_cooker.util.Tools.getDomain()+ '/go_register',
                    data:userinfo,
                    dataType:'json',
                    success: function (data) {
                        if(data.res==1){
                            // Ext.Msg.alert("用户名已存在");
                            swal("用户名已存在","","warning")
                        }else if(data.res==0){
                            var s=Ext.getCmp('reg_telephone').getValue();
                            localStorage.setItem('userid',s);
                            register_loop.redirectTo(sessionStorage.getItem('route'));
                        }else if(data.res==2){
                            // Ext.Msg.alert("注册失败");
                            swal("注册失败","","error")
                        }

                    },
                    error: function (error) {
                       alert('error');
                    }

                });
                return false;
            }else{
                swal("手机号错误或密码不一致","","warning");
               /* Ext.Msg.alert('两次密码不一致');*/

            }

        /*}else {
            var message='';
            Ext.each(errors.items,function (res) {
                message+=res.getMessage()+'<br>';
            });
            Ext.Msg.alert(message);
        }*/

    }

});
/*function showRegister1() {
    location.href='/Projecttwo/#route_main';
    // history.back();
}*/
