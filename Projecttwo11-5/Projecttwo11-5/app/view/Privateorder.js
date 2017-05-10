/**
 * Created by Administrator on 2016/10/23.
 */
Ext.define('private_cooker.view.Privateorder',{
    extend: 'Ext.Panel',
    xtype: 'private_order',
    requires:[
        'Ext.TitleBar'
    ],
    config: {
        id:'privateorder_view',
        items: [
            {
                id:'private_order_now',
                height:'100%',
                scrollable:true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '立即预订',
                        cls:'private_order_topbar',
                        items:[
                            {
                                xtype:'button',
                                id:'private_order_back_private',
                                cls:'private_order_back',
                                iconCls:'back_cooker',
                                align:'left'
                                // html:'<img src="resources/images/back.png" class="private_order_back_img"/>'
                            }
                            ]
                    },
                    {
                        xtype:'panel',
                        height:'100%',
                        items:[
                            {
                                xtype:'panel',
                                id:'order_list'
                            },
                            {
                                xtype:'panel',
                                id:'private_order_address'
                            },
                            {
                                xtype:'panel',
                                id:'private_tag_content'
                            }
                        ]
                    }

                ]
            },
            {
                docked:'bottom',
                id:'private_go_order',
                cls:'private_go_order',
                xtype:'button',
                height:50,
                text:'立即预订'
            }
        ]
    }
})

function tagSelect() {
    $('.tag_press').click(function () {
        var ss=$(this).find('.tag_text p');
        if($(this).find('.tag_select_1').hasClass('tag_select1')){
            $(this).find('.tag_select_1').removeClass('tag_select1').addClass('tag_select1_fill');
            $(this).find('.tag_text p').addClass('tag_color');
            $('.private_tag_input').append(ss.text());

        }
        if($(this).find('.tag_select_2').hasClass('tag_select2')){
            $(this).find('.tag_select_2').removeClass('tag_select2').addClass('tag_select2_fill');
            $(this).find('.tag_text p').addClass('tag_color');
            $('.private_tag_input').append(ss.text());

        }
        if($(this).find('.tag_select_3').hasClass('tag_select3')){
            $(this).find('.tag_select_3').removeClass('tag_select3').addClass('tag_select3_fill');
            $(this).find('.tag_text p').addClass('tag_color');
            $('.private_tag_input').append(ss.text());

        }
        if($(this).find('.tag_select_4').hasClass('tag_select4')){
            $(this).find('.tag_select_4').removeClass('tag_select4').addClass('tag_select4_fill');
            $(this).find('.tag_text p').addClass('tag_color');
            $('.private_tag_input').append(ss.text());

        }
        if($(this).find('.tag_select_5').hasClass('tag_select5')){
            $(this).find('.tag_select_5').removeClass('tag_select5').addClass('tag_select5_fill');
            $(this).find('.tag_text p').addClass('tag_color');
            $('.private_tag_input').append(ss.text());

        }
        if($(this).find('.tag_select_6').hasClass('tag_select6')){
            $(this).find('.tag_select_6').removeClass('tag_select6').addClass('tag_select6_fill');
            $(this).find('.tag_text p').addClass('tag_color');
            $('.private_tag_input').append(ss.text());

        }
    })

}