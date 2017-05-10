/**
 * Created by Administrator on 2016/10/23.
 */
Ext.define('private_cooker.view.Add_Address',{
    extend: 'Ext.Panel',
    xtype: 'add_address',
    requires:[
        'Ext.TitleBar'
    ],
    config: {
        id:'add_address_view',
        items: [
            {

                items: [
                    {
                        items: {
                            docked: 'top',
                            xtype:'titlebar',
                            title:'添加地址',
                            cls:'tool_bar_personal',
                            items:[
                                {
                                    cls:'btn_backmain_personal',
                                    xtype:'button',
                                    id:'btn_back_add_address_personal',
                                    iconCls:'back_cooker',
                                    align:'left'
                                    // html:'<img src="resources/images/back.png" class="private_back_img"/>'
                                }

                            ]
                        }
                    },
                    {

                        html:'<div >' +
                        '<div class="add_address_table"><table >' +
                        '<tr class="add_address_address">' +
                        '<td rowspan="2">地址:</td>' +
                        '<td><input type="text" id="demo1" readonly="" name="input_area" placeholder="服务地址" required="required"></td>' +
                        '<td></td>' +
                        '</tr>' +
                        '<tr >' +
                        '<td><input type="text" id="add_address_detail" name="input_area" placeholder="xx号xx单元xx室" required="required"></td>' +
                        '<td></td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>姓名:</td>' +
                        '<td><input type="text" id="user_name_address" placeholder="您的姓名" required="required"></td>' +
                        '<td></td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>手机:</td>' +
                        '<td><input type="text" id="user_name_tel" placeholder="您的联系方式" required="required"></td>' +
                        '<td></td>' +
                        '</tr>' +
                        '<tr class="add_address_sex" >' +
                        '<td rowspan="3">性别:</td>' +
                        '<td ><input type="radio" name="sex" class="sex_boy" value="男" checked />男<input type="radio" name="sex" class="sex_girl" value="女"  />女</td>' +
                        '</tr>' +
                        '</table>' +

                        '</div>' +
                        '<div class="add_address_button_tijiao">' +
                        '<button id="button_tijiao">提交</button>' +
                        '</div>' +
                        
                        '</div>'
                    }
                ]
            }
        ]
    }
})