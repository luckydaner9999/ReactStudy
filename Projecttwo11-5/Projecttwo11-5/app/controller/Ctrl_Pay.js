/**
 * Created by Administrator on 2016/10/18.
 */

Ext.define('private_cooker.controller.Ctrl_Pay', {
    extend: 'Ext.app.Controller',
    requires:[
        'private_cooker.util.Tools'
    ],
    init:function () {
        // Ext.getCmp('btn_go').setText('gogogo');
    },
    config: {
        refs: {
            payview: {
                selector: 'pay',
                xtype: 'pay',
                autoCreate: true
            },
            back_orders:'#back_orders',
            _pay:'#pay_view',
            pay_back_private:'#pay_back_private',
            pay_go_myorder:'#pay_go_myorder'
        },
        control:{
            _pay:{
                activeitemchange:'changeItem'
            },
            pay_back_private:{
                tap:'pay_back_private'
            },
            private_go_order:{
                tap:'private_go_order'
            },
            pay_go_myorder:{
                tap:'pay_go_myorder'
            },
            back_orders:{
                tap:'func_back_orders'
            }
        },
        routes: {
            'route_pay_cooker': 'showPayCooker'
        }
    },
    showPayCooker:function () {
        Ext.Viewport.setActiveItem(this.getPayview());
        if(sessionStorage.getItem('order_un')=='null'){
            $('.name').text('');
            $('.tel').text('');
        }else {
            $('.name').text(sessionStorage.getItem('order_un'));
            $('.tel').text(sessionStorage.getItem('otel'));

        }
        Ext.getCmp('pay_info_confirm').setHtml('<div class="pay_service_info">' +
                    '<div class="pay_content"><table>' +
                    '<tr><td>服务信息:</td><td class="dn">'+sessionStorage.getItem('order_dn')+' </td></tr>' +
                    '<tr rowspan="2"><td>服务地址:</td><td><span class="name">'+sessionStorage.getItem('order_un')+'</span><span class="tel">'+sessionStorage.getItem('otel')+'</span></td></tr>' +
                    '<tr><td></td><td class="o_address">'+sessionStorage.getItem('province')+''+sessionStorage.getItem('city')+sessionStorage.getItem('area')+''+sessionStorage.getItem('address_detail')+' </td></tr>' +
                    '<tr><td>用餐时间:</td><td class="order_time">'+sessionStorage.getItem('order_time')+'</td></tr>' +
                    '<tr><td>备注信息:</td><td class="remarks_text">'+sessionStorage.getItem('remark')+'</td></tr>' +
                    '</table>' +
                    '<div class="pay_tel_service clearfix">' +
                    '<div class="pay_logo"><img src="resources/images/login_logo.png" alt=""></div>' +
                    '<div class="pay_text">&nbsp;&nbsp;有客服为您匹配大厨</div>' +
                    '</div></div>' +
                    '<div class="pay_type">' +
                    '<p>支付方式</p>' +

                    '<div class="pay_type_select">' +
                    '<div class="pay_type_img"><img src="resources/images/weixin.png" alt=""></div>' +
                    '<div class="pay_type_text"><p> 微信支付</p><span> 推荐安装微信客户端的用户使用</span></div>' +
                    '<div class="pay_type_checked pay_circle_check"></div>' +
                    '</div>' +

                    '<div class="pay_type_select">' +
                    '<div class="pay_type_img"><img src="resources/images/pay.png" alt=""></div>' +
                    '<div class="pay_type_text"><p> 支付宝支付</p><span> 推荐安装支付宝的用户使用</span></div>' +
                    '<div class="pay_type_checked"></div>' +
                    '</div>' +
                    '</div>'+
                    '</div>');

        var paymoney=Ext.getCmp('pay_money').setHtml('<p class="pay_price">实付<span class="price">'+sessionStorage.getItem('price')+'</span>元</p>')
        payType()
        // alert('bjjbdf');
    },
    pay_back_private:function () {
        this.redirectTo('route_main');
    },
    pay_go_myorder:function () {
        var d = new Date();
        var M=d.getMinutes(); //获取分
        M=M>9?M:"0"+M;
        var H=d.getHours();
        H=H>9?H:"0"+H;
        var S=d.getHours();
        S=S>9?S:"0"+S;
        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+"  "+H+":"+M +":"+S+""
        function createFileName(){
            var date=new Date();
            var ran=Math.random();
            var datea=new Date('1970-1-1');
            var _name=ran.toString()+(date-datea);
            // _name=_name.split(".");
            return _name;
        }
        var number1=createFileName();
        var number=number1.substring(2,20)
        $.ajax({
            type: 'post',
            url:  private_cooker.util.Tools.getDomain()+'/update_user_menu/mobile',
            data:{
                cid:sessionStorage.getItem('c_id'),
                u_t:localStorage.getItem('userid'),
                time:str,number:number,_name:$('.name').text(),
                tel:$('.tel').text(),u_address:$('.o_address').text(),
                _message:$('.remarks_text').text(),
                dinner_date:sessionStorage.getItem('order_time'),
                dinner_time:null,
                price:$('.price').text()},
            timeout: 3000,
            dataType: 'json',
            success: function (result) {
                if(result.res==1){
                    /*Ext.Msg.alert('付款成功');*/
                    sessionStorage.removeItem('order_time');
                    swal("付款成功","","success");
                }else{
                    // alert('update fail');
                    // swal("付款失败","","error")
                }

            },
            error: function (error) {
                 // alert('error')
                // alert("未知错误","","error")
            }

        })

    },
    func_back_orders:function () {
        this.redirectTo('route_order');
    }
});
function payType() {
    $('.pay_type_select').click(function () {
        $(this).children('.pay_type_checked').addClass('pay_circle_check');
        $(this).siblings().children().removeClass('pay_circle_check');
    })
}