/**
 * Created by Administrator on 2016/10/13.
 */
Ext.define('private_cooker.view.Register',{
    extend: 'Ext.Panel',
    requires: ['Ext.form.Panel','Ext.form.FieldSet','Ext.field.Password'],
    xtype:'register',
    config: {
        id:'register_view',
        xtype:'panel',
        fullscreen:true,
        items:[
             {
                docked: 'top',
                layout:'hbox',
                cls:'register_close',
                items:[
                    {
                        xtype:'button',
                        id:'register_back_main',
                        iconCls:'back_cooker',
                        align:'left'
                        // html:'<img src="resources/images/back.png" class="register_close_img"/>'
                    }]
            },
             {
                cls:'register_logo',
                html:'<img src="resources/images/login_logo.png" class="login_logo_img"/><p>私 人 厨 师</p>'
            },
             {
               xtype:'formpanel',
               scrollable:null,
               id:'register_form',
               cls:'register_form',
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
                                 id:'reg_telephone',
                                 name:'telephone',
                                 placeHolder:'输入手机号码'
                             },
                             {
                                 xtype:'passwordfield',
                                 id:'reg_password',
                                 name:'password',
                                 placeHolder:'输入密码大于六位'
                             },
                             {
                                 xtype:'passwordfield',
                                 id:'reg_password_confirm',
                                 name:'password_confirm',
                                 placeHolder:'确认密码'
                             },
                             {
                                 xtype:'button',
                                 id:'btn_register_1',
                                 cls:'btn_register_submit',
                                 text:'注册',
                                 ui:'action'
                             }

                         ]
                     }
                 ]
            }
         ]
    }
});
