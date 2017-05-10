/**
 * Created by Administrator on 2016/10/23.
 */
Ext.define('private_cooker.view.Change_Password_Personal',{
    extend: 'Ext.Panel',
    xtype: 'change_password_personal',
    requires:[
        'Ext.TitleBar'
    ],
    config: {
        
        items: [
            {

                items: [
                    {
                        items: {
                            docked: 'top',
                            xtype:'titlebar',
                            title:'修改密码',
                            cls:'tool_bar_personal',
                            items:[
                                {
                                    xtype:'button',
                                    cls:'btn_backmain_personal',
                                    id:'btn_back_change_password_personal',
                                    iconCls:'back_cooker',
                                    align:'left'
                                    // html:'<img src="resources/images/back.png" class="private_back_img">'
                                }

                            ]
                        }
                    },
                    {

                        html:' <div class="all_change_password_personal">'+
                              '<form action="#">' +
                               '<div class="all_change_oldpasswordtop">'+
                              '<label for="old_password" class="all_change_oldpassword">原密码 ：</label><input type="password" id="old_password" placeholder="请输入原密码" required><br>'+
                              '</div>'+
                              '<div class="all_change_oldpasswordtop">'+
                              '<label for="new_password" class="all_change_oldpassword">新密码 ：</label><input type="password" id="new_password" placeholder="请输入修改后的密码" required>'+
                              '</form>'+
                              '</div >'+
                              '<div class="all_change_oldpasswordbottom"">'+
                              '<button type="button" class="change_password_btn_confirm">保存</button>'+
                              '</div>'+
                              '</div >'

                    }
                ]
            }
        ]
    }
})