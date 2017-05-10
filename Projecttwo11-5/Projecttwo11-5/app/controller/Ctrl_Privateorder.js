/**
 * Created by Administrator on 2016/10/18.
 */

Ext.define('private_cooker.controller.Ctrl_Privateorder', {
    extend: 'Ext.app.Controller',
    requires:[
        'private_cooker.util.Tools'
    ],
    init:function () {
        // Ext.getCmp('btn_go').setText('gogogo');
    },
    config: {
        refs: {
            privateorderview: {
                selector: 'private_order',
                xtype: 'private_order',
                autoCreate: true
            },
            _privateorder:'#privateorder_view',
            private_order_back_private:'#private_order_back_private',
            private_go_order:'#private_go_order'
        },
        control:{
            _privateorder:{
                activeitemchange:'changeItem'
            },
            private_order_back_private:{
                tap:'private_order_back_private'
            },
            private_go_order:{
                tap:'private_go_order'
            }
        },
        routes: {
            'route_order_details': 'showPrivateorder',
            'route_order':'showOrder'
        }
    },
    showPrivateorder:function () {
        sessionStorage.setItem('route','route_order_details');
        var p=this;
        Ext.Viewport.setActiveItem(this.getPrivateorderview());
        // $('.chose_address').empty();
       Ext.getCmp('order_list').setHtml(
           '<div class="private_order_content ">' +
           '<p style="color: #999;text-align: center;line-height: 32px">菜品信息</p>' +
            '<div class="private_tip clearfix">' +
            '<div class="private_order_img"><img src="'+sessionStorage.getItem('img')+'"/></div>' +
            '<div class="private_order_info">' +
            '<h1>'+sessionStorage.getItem('order_dn')+'</h1>' +
            '<p><span>'+sessionStorage.getItem('price')+'</span>元</p>' +
            '</div></div>' +

           '</div>' +
          '</div>'+
           '<div class="private_service clearfix">' +
           '<p style="color: #999;text-align: center;line-height: 32px">服务信息</p>' +
           '<div class="private_order_address">' +
           '<div id="privatechose_add">选择地址</div>'+
           '</div>' +
           '<div class="private_order_time">' +
           '<input id="endTime" class="kbtn" placeholder="选择日期" readonly/>'+
           '<div id="datePlugin"></div>'+
           '</div>' +
           '</div>' +
           '</div>'+
           '<div class="private_tag clearfix">' +
           '<p style="color: #999;text-align: center;line-height: 32px">备注信息</p>' +
           '<div class="private_order_select" >' +
           '<div class="private_tag_input"></div>' +
           '<div class="private_tag_click clearfix">' +

           '<div class="tag_press"><div class="tag_select_1 tag_select1">' +
           '</div>' +
           '<div class="tag_text"><p>不吃辣 </p></div></div>' +

           '<div class="tag_press"><div class="tag_select_2 tag_select2">' +
           '</div>' +
           '<div class="tag_text"><p>有小孩 </p></div></div>' +

           '<div class="tag_press"><div class="tag_select_3 tag_select3">' +
           '</div>' +
           '<div class="tag_text"><p>清淡口味 </p></div></div>' +

           '<div class="tag_press"><div class="tag_select_4 tag_select4">' +
           '</div>' +
           '<div class="tag_text"><p>有忌口 </p></div></div>' +

           '<div class="tag_press"><div class="tag_select_5 tag_select5">' +
           '</div>' +
           '<div class="tag_text"><p>有老人 </p></div></div>' +

           '<div class="tag_press"><div class="tag_select_6 tag_select6">' +
           '</div>' +
           '<div class="tag_text"><p>有孕妇 </p></div></div>' +
           '</div>'
        );

        // $('.chose_address').text(sessionStorage.getItem('area')+''+sessionStorage.getItem('address_detail'));
        privatechose_add(p);
        timerSelect();
        tagSelect();



    },
    showOrder:function () {
        var cooker_order=this;
        sessionStorage.setItem('route','route_order');
        // Ext.Viewport.setActiveItem(this.getPrivateorderview().setActiveItem(1));
        Ext.Viewport.setActiveItem(this.getPrivateorderview());
        $('.dn').empty();
        $('.chose_address').empty();
        if(sessionStorage.getItem('order_un')=='null'){
            $('.user_name').text('');
            $('.otel').text('');
        }else {
            $('.user_name').text(sessionStorage.getItem('order_un'));
            $('.otel').text(sessionStorage.getItem('otel'));

        }
        // alert('okkk');


        $.ajax({
            type: 'post',
            url: private_cooker.util.Tools.getDomain()+'/order_details/mobile',
            data:{u_t:localStorage.getItem('userid'),cid:sessionStorage.getItem('c_id')},
            timeout: 3000,
            dataType: 'json',

            success: function (result) {
                // alert(result.res[0].dishes_name);
                // var list=ordertpl.apply(result);
                Ext.getCmp('order_list').setHtml('<div class="private_order_content01 clearfix">' +
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
                    $('.dn').append(result.res[i].dishes_name+' ');
                }


                timerSelect();
                chose_address(cooker_order);
                tagSelect();
                sessionStorage.setItem('order_dn',$('.dn').text());
                sessionStorage.setItem('order_un',$('.user_name').text());
                sessionStorage.setItem('otel',$('.otel').text());


            },
            error: function (error) {
                // alert('error');
            }
            // }

        });
    },
    private_order_back_private:function () {
        if(sessionStorage.getItem('route')=='route_order_details'){
            this.redirectTo('route_private');
        }else {
            this.redirectTo('route_dishes');

        }
    },
    private_go_order:function () {
        var servicetime=$('#endTime').val();
        var tag=$('.private_tag_input').text();
        if(servicetime==''){
            // Ext.Msg.alert('请选择用餐时间')
            swal("请选择用餐时间","","warning");
        }

        else{
            sessionStorage.setItem('order_time',servicetime);
            sessionStorage.setItem('remark',tag);
            $.ajax({
                type: 'post',
                url:private_cooker.util.Tools.getDomain()+'/cooker_menu/mobile',
                data:{dish_name:sessionStorage.getItem('order_dn'),cid:sessionStorage.getItem('c_id'),u_t:localStorage.getItem('userid')},
                timeout: 3000,
                dataType: 'json',

                success: function (result) {
                },
                error: function (error) {
                    // alert('error')
                }
                // }

            });
            this.redirectTo('route_pay_cooker');
        }
    },
    changeItem:function (obj,item) {
        Ext.Viewport.setActiveItem(this.getPrivateorderview());
    },
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
function timerSelect() {
    $('#endTime').date({theme:"datetime"});
}
function privatechose_add(p) {
    if(sessionStorage.getItem('province')==null){
        $('#privatechose_add').text('选择地址');
        $('#privatechose_add').click(function () {
            sessionStorage.setItem('route','route_order_details');

            // location.href='/Projecttwo/#route_address_personal'
            p.redirectTo('route_address_personal');
        })
    }else {
        $('#privatechose_add').text('');
        $('#privatechose_add').text(sessionStorage.getItem('province')+''+sessionStorage.getItem('city')+''+sessionStorage.getItem('area')+''+sessionStorage.getItem('address_detail'));
        $('#privatechose_add').click(function () {
            //location.href='/Projecttwo/#route_address_personal'
            sessionStorage.setItem('route','route_order_details');
            p.redirectTo('route_address_personal');
        })
    }

}
function chose_address(cooker_order) {
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

