var ss;
var res;
var cooker_order;
Ext.define('private_cooker.controller.Ctrl_Cooker_order', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template',
        'private_cooker.util.Tools'
    ],
    config: {
        refs: {
            cookerordersview: {
                selector: 'cooker_order',
                xtype: 'cooker_order',
                autoCreate: true
            },
            back_dishes:'#back_dishes',
            confirm_o_btn:'#confirm_o_btn'


        },
        control:{
            back_dishes:{
                tap:'func_back_dishes'
            },
            confirm_o_btn:{
                tap:'func_cfOrder'
            }

        },
        routes:{
            'route_order':'showOrder'
        }
    },
    // 显示确认订单页
    showOrder:function () {
        cooker_order=this;
        Ext.Viewport.setActiveItem(this.getCookerordersview());
        $.ajax({
            type: 'post',
            url: private_cooker.util.Tools.getDomain()+'/order_details/mobile',
            data:{u_t:localStorage.getItem('userid'),cid:sessionStorage.getItem('c_id')},
            timeout: 3000,
            dataType: 'json',
            success: function (result) {
                alert('okk');
                // var list=ordertpl.apply(result);
                Ext.getCmp('cooker_order_list').setHtml(   '<div class="private_order_content clearfix">' +
                    '<p class="cooker_order_dinner_info">用餐信息</p>' +
                    '<div class="order_tip clearfix">' +
                    '<div class="have_dinner">' +
                    '<p>服务用户</p>'+
                    '<p>服务厨师</p>'+
                    '<p>选择菜品</p>'+
                    '</div>' +
                    '<div class="hd_details">' +
                    '<p><span class="user_name"></span><span class="otel"></span></p>' +
                    '<p>'+sessionStorage.getItem('c_name')+'</p>' +
                    '<p class="dn"></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="private_service clearfix">' +
                    '<p class="cooker_order_dinner_info">服务信息</p>' +
                    '<div class="private_order_address">' +
                    '<p id="cooker_chose_address">选择地址</p>' +
                    '</div>' +
                    '<div class="private_order_time">' +
                    '<input id="endTime" class="kbtn" placeholder="选择日期" readonly/>'+
                    '<div id="datePlugin"></div>'+
                    '</div>' +
                    '</div>' +
                    '<div class="private_tag clearfix">' +
                    '<p class="cooker_order_dinner_info">备注信息</p>' +
                    '<div class="private_order_select">' +
                    '<div class="private_tag_input"></div>' +
                    '<div class="private_tag_click clearfix">' +
                    '<div class="tag_press press01">' +
                    '<div class="tag_select_1 tag_select1"></div>' +
                    '<div class="tag_text"><p>不吃辣</p></div>' +
                    '</div>' +
                    '<div class="tag_press press02"><div class="tag_select_2 tag_select2">' +
                    '</div>' +
                    '<div class="tag_text"><p>有小孩</p></div></div>' +

                    '<div class="tag_press press03"><div class="tag_select_3 tag_select3">' +
                    '</div>' +
                    '<div class="tag_text"><p>清淡口味</p></div></div>' +

                    '<div class="tag_press"><div class="tag_select_4 tag_select4">' +
                    '</div>' +
                    '<div class="tag_text"><p>有忌口</p></div></div>' +

                    '<div class="tag_press press04"><div class="tag_select_5 tag_select5">' +
                    '</div>' +
                    '<div class="tag_text"><p>有老人</p></div></div>' +

                    '<div class="tag_press press05">' +
                    '<div class="tag_select_6 tag_select6"></div>' +
                    '<div class="tag_text"><p>有孕妇</p></div>' +
                    '</div>' +
                    '</div>'+
                    '</div>');
                for(var i=0;i<result.res.length;i++){
                    console.log(result.res[i].dishes_name);
                    $('.dn').append(result.res[i].dishes_name+' ');
                }


                timerSelect();
                chose_address();
                tagSelect();
                sessionStorage.setItem('order_dn',$('.dn').text());
                sessionStorage.setItem('order_un',$('.user_name').text());
                sessionStorage.setItem('otel',$('.otel').text());



            },
            error: function (error) {
                alert('error');
            }
            // }

        });
        $('.dn').empty();
        $('.chose_address').empty();
        // alert('okkk');
        if(sessionStorage.getItem('order_un')=='null'){
            $('.user_name').text('');
            $('.otel').text('');
        }else {
            $('.user_name').text(sessionStorage.getItem('order_un'));
            $('.otel').text(sessionStorage.getItem('otel'));
        }





        // $('.chose_address').text(sessionStorage.getItem('area')+''+sessionStorage.getItem('address_detail'))

    },
    // 返回选菜页
    func_back_dishes:function () {
        this.redirectTo('route_dishes');
    },
    // 去下单
    func_cfOrder:function () {
        if($('.kbtn').val()==''){
            // Ext.Msg.alert('请选择用餐时间')
            swal("请选择用餐时间", "", "warning");
        }else {
            sessionStorage.setItem('order_time',$('.kbtn').val());
            sessionStorage.setItem('remark',$('.private_tag_input').text());
            sessionStorage.setItem('price',158);
            this.redirectTo('route_pay_cooker');
        }

    }

});

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
    });
}
function timerSelect(){
    $('#endTime').date({theme:"datetime"});
}
function chose_address() {
    if(sessionStorage.getItem('province')==null) {
        $('#cooker_chose_address').text('选择地址');
        $('#cooker_chose_address').click(function () {
            sessionStorage.setItem('route','route_order');
            cooker_order.redirectTo('route_address_personal');
            // location.href='/Projecttwo/#route_address_personal'
        });
    }else {
        $('#cooker_chose_address').empty();
        $('#cooker_chose_address').text(sessionStorage.getItem('province')+''+sessionStorage.getItem('city')+''+sessionStorage.getItem('area')+''+sessionStorage.getItem('address_detail'));
        $('#cooker_chose_address').click(function () {
            sessionStorage.setItem('route','route_order');
            cooker_order.redirectTo('route_address_personal');
            // location.href='/Projecttwo/#route_address_personal'
        });

    }


}
