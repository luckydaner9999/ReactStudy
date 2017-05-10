/**
 * Created by lzhan on 16/10/10.
 */
Ext.define('private_cooker.controller.Ctrl_Change_Password_Personal', {
    extend: 'Ext.app.Controller',
    config:{
        refs: {
               changepasswordview: {
                    selector: 'change_password_personal',
                    xtype: 'change_password_personal',
                    autoCreate: true
                },
       btn_back_change_password_personal:'#btn_back_change_password_personal',
            },
        control:{
       btn_back_change_password_personal:{
                tap:'func_back_change_password_personal'
            },

        },
        routes:{
            'route_change_password_personal':'showchange_password_personal'
        }
    },
    showchange_password_personal:function () {
        var back=this
        Ext.Viewport.setActiveItem(this.getChangepasswordview());

        $('#old_password').blur(

            function () {
                $.ajax({
                    type: 'get',
                    url:private_cooker.util.Tools.getDomain()+ '/change_password',
                    data:{change_password:$('#old_password').val(),u_t:localStorage.getItem('userid')},
                    timeout: 3000,
                    dataType:'json',
                    start: function () {

                    },
                    success: function (result) {
                        if(result.res==1){
                            // Ext.Msg.alert('该用户原密码正确')
                            /*swal("该用户原密码正确", "", "success");*/
                            $('.change_password_btn_confirm').click(function(){
                                if($('#new_password').val().length<6){
                                    /*Ext.Msg.alert('密码大于六位')*/
                                    swal("密码大于六位", "", "warning");
                                }else {
                                    $.ajax({
                                        type: 'post',
                                        url: private_cooker.util.Tools.getDomain() + '/change_password',
                                        data: {
                                            change_password: $('#new_password').val(),
                                            u_t: localStorage.getItem('userid')
                                        },
                                        timeout: 3000,
                                        dataType: 'json',
                                        start: function () {

                                        },
                                        success: function (result) {
                                            if (result.res == 1) {
                                                /*Ext.Msg.alert('修改成功')*/
                                                swal("密码大于六位", "", "warning");
                                                //跳转到登录页面
                                                //location.href = '/touch-2.4.2/Projecttwo/#route_personal';
                                                back.redirectTo('route_login');
                                            } else {
                                                // Ext.Msg.alert('修改失败')
                                                swal("修改失败", "", "error");
                                            }
                                        },
                                        error: function (error) {
                                            alert('error');
                                         /*   // Ext.Msg.alert("未知错误")
                                            swal("err", "", "error");*/
                                        }
                                    })
                                    return false;

                                }})
                        }else{
                            /*Ext.Msg.alert('该用户原密码不正确')*/
                            swal("该用户原密码不正确", "", "warning");
                        }
                    },
                    error: function (error) {
                        alert('error')
                    }
                })
                return false;
            }
        )
    },
    func_back_change_password_personal:function () {
        this.redirectTo('route_personal_myaccount');
    },

});
//