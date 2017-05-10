/**
 * Created by Administrator on 2016/10/23.
 */
Ext.define('private_cooker.view.Change_Header',{
    extend: 'Ext.Panel',
    xtype: 'change_header',
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
                            title:'修改头像',
                            cls:'tool_bar_personal',
                            items:[
                                {
                                    xtype:'button',
                                    cls:'btn_backmain_personal',
                                    id:'btn_back_change_header_personal',
                                    iconCls:'back_cooker',
                                    align:'left'
                                    // html:'<img src="resources/images/back.png" class="private_back_img">'
                                }
                            ]
                        }
                    },
                    {
                        html:'<form class="uploadtwo_change_header">'+
                        '<div class="myaccount_change_header">'+
                        '<div class="change_header_file_container">'+
                        // '<img src="/headers/'+data.res[0].user_icon+'" alt="">&nbsp;&nbsp;'+
                        '<div class="change_uicon_change_header"><input type="file" id="exampleInputFile" name="fileImage" class="input_file_change_header"></div>' +
                        '<div class="change_head_rightrow"><img src="resources/images/change_header_right.png"> </div>' +
                        ' <div class="img_preview"></div>'+
                        '<div class="clearfix"></div>'+
                        '<input type="text" name="u_telephone" class="change_header_u_telephone" readonly value="'+localStorage.getItem('userid')+'" >'+
                        '</div>' +

                        '<button class="save_change confirm_change_header">确认修改</button>'+

                        '</div >'+
                        '</form>'
                    }
                ]
            }
        ]
    }
})