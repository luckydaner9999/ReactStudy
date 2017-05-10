/**
 * Created by Administrator on 2016/10/13.
 */
Ext.define('private_cooker.view.Login',{
    extend: 'Ext.Panel',
    requires: ['Ext.form.Panel','Ext.form.FieldSet','Ext.field.Password'],
    xtype:'login',
    config: {
        id:'login_view',
        xtype:'panel',
        fullscreen:true,
        items:[
             {
                docked: 'top',
                layout:'hbox',
                cls:'login_close',
                items:[
                    {
                        xtype:'button',
                        id:'login_back_main',
                        html:'<img src="resources/images/error.png" class="login_close_img"/>'
                    }]
            },
             {
                cls:'login_logo',
                html:'<img src="resources/images/login_logo.png" class="login_logo_img"/><p>私 人 厨 师</p>'
            },
             {
               xtype:'formpanel',
               scrollable:null,
               id:'login_form',
               cls:'login_form',
               items:[
                   {
                         xtype:'fieldset',
                         cls:'login_form_quote',
                         defaults:{
                             style:'margin-bottom:20px;'
                         },
                         items:[
                             {
                                 xtype:'textfield',
                                 id:'telephone',
                                 name:'telephone',
                                 placeHolder:'手机号码'
                             },
                             {
                                 xtype:'passwordfield',
                                 id:'txt_password',
                                 name:'password',
                                 placeHolder:'密码大于六位'
                             },
                             {
                                 xtype:'button',
                                 id:'login_go_register',
                                 html:'<a class="login_go_register">去注册</a>'
                             },
                             {
                                 xtype:'button',
                                 id:'btn_login_1',
                                 cls:'btn_login_submit',
                                 text:'登录',
                                 ui:'action'
                             }

                         ]
                     }
                 ]
            }
         ]
    }
});
