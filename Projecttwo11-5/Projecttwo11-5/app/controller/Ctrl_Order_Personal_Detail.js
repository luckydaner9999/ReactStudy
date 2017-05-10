/**
 * Created by lzhan on 16/10/10.
 */



var tpl=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="each_order_personal">' +
    '<div class="inner_each_order_personal">' +
    '<div class="left_order_personal"><img src="resources/images/{c_icon}" alt=""></div>'+
    '<div class="right_order_personal">' +
    '<p class="text_number_personal">订单编号:</p>' +
    '<div class="clearfix"></div>' +
    '<p class="number_personal" id="number_personal">{number}</p>' +
    '<p class="text_time_personal">时间:<span class="number_time_personal">{time}</span></p>' +
    '<button class="order_detail_personal" >订单详情</button>' +
    '</div>'+
    '</div>'+
    '</tpl>' )
// Ext.getStore('Store_Order_Detail').filterBy(function(record){
//     var number = record.get('number');
//         return record;
// });
Ext.define('private_cooker.controller.Ctrl_Order_Personal_Detail', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template',
        'private_cooker.util.Tools'
    ],
    config: {
        refs: {
            orderview: {
                    selector: 'order_personal_detail',
                    xtype: 'order_personal_detail',
                    autoCreate: true
                },
                btnPersonalDetail:'#btn_back_personal_detail',
                dwOrderPersonalDetail:'#all_order_personal_detailall',
                my_order:'#my_order',
                personal_detail_button:'#personal_detail_button',
            personal_detail_delete_button:'#personal_detail_delete_button'
            
            },
        control:{
            btnPersonalDetail:{
                tap:'func_show_personal'
            },
            dwOrderPersonalDetail:{
                initialize:'showOrderPersonalDetail'
            },
            personal_detail_button:{
                tap:function(){
                   /* alert('111')*/
                    this.redirectTo('route_comment_personal');
                }
            },
            personal_detail_delete_button:{
                tap:'fun_personal_detail_delete_button'
            }
        },
        routes: {
            'route_order_personal_detail': 'showOrderPersonalDetail'
        }
    },
    func_show_personal:function () {
        localStorage.removeItem('number');
        localStorage.removeItem('c_id');
        this.redirectTo('route_order_personal');

    },
    showOrderPersonalDetail:function () {
        Ext.Viewport.setActiveItem(this.getOrderview());
        $.ajax({
            type: 'get',
            url: private_cooker.util.Tools.getDomain()+'/order/sencha/detail',
            data: {number:sessionStorage.getItem('number')},
            dataType:'json',
            success: function (result) {
               // alert(result[0].number)
              //  Ext.getCmp('my_order').setHtml(result[0].name)
                Ext.getCmp('personal_detail_contacts').setHtml('<div class="personal_detail_my_order">联系人:<span>'+result[0].name+'</span></div>');
                Ext.getCmp('personal_detail_content_tel').setHtml('<div class="personal_detail_my_order">联系人:<span>'+result[0].tel+'</span></div>');
                Ext.getCmp('personal_detail_content_address').setHtml('<div class="personal_detail_my_order"><span>'+result[0].address+'</span></div>');
                Ext.getCmp('personal_detail_content_time').setHtml('<div class="personal_detail_my_order">用餐时间:<span>'+result[0].dinner_date+'</span></div>')
                Ext.getCmp('personal_detail_content_c_icon').setHtml('<div class="personal_detail_icon"><img src="resources/images/'+result[0].c_icon+'"> </div>');
                Ext.getCmp('personal_detail_content_c_name').setHtml('<div class="personal_detail_my_order"><span>'+result[0].c_name+'</span></div>');
                Ext.getCmp('personal_detail_content_dish').setHtml('<div class="personal_detail_my_order">菜品:<span>'+result[0].dishes_name+'</span></div>');
                Ext.getCmp('personal_detail_content_price').setHtml('<div class="personal_detail_my_order">订单金额:<span>'+result[0].price+'</span>元</div>');
            },
            error: function (error) {
                alert('error!!!!');

            }

        });
    },
    fun_personal_detail_delete_button:function(){
        var back=this;
        swal({
            title: "删除订单",
            text: "确定要删除么？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false
        },function () {
            if($('.confirm').text()=='确定'){
                $.ajax({
                    type: 'get',
                    url: private_cooker.util.Tools.getDomain()+'/delete_menu',
                    data:{number:sessionStorage.getItem('number')},
                    // dataType:'json',
                    success: function (result) {
                        // console.log('res'+JSON.stringify(result.datas));
                        /*Ext.Msg.alert('删除订单成功');*/
                        swal("删除订单成功","","success")
                        // location.href='/Projecttwo/#route_order_personal'
                        back.redirectTo('route_order_personal');
                    },
                    error: function (error) {
                        alert('error!!!!');

                    }

                });
            }
        });
     }
});