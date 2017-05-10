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
    '<p class="number_personal" id="number_personal">{}</p>' +
    '<p class="text_time_personal">Time:<span class="number_time_personal">{time}</span></p>' +
    '<button class="order_detail_personal" id="order_detail_personal11">订单详情</button>' +
    '</div>'+
    '</div>'+
    '</tpl>' )
Ext.define('private_cooker.controller.Ctrl_Order_Personal', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template',
        'private_cooker.util.Tools'
    ],
    config: {
        refs: {
            orderview: {
                    selector: 'order_personal',
                    xtype: 'order_personal',
                    autoCreate: true
                },
                btnPersonal:'#btn_back_personal',
            dwOrderPersonal:'#all_order_personal',

            },
        control:{
            btnPersonal:{
                tap:'func_show_personal'
            },
            dwOrderPersonal:{
                itemtap:'dw_click',
                itemtaphold:'dw_hold'
            },

        },
        routes: {
            'route_order_personal': 'showOrderPersonal',
        }

    },
    func_show_personal:function () {

            this.redirectTo('route_personal');

    },
    showOrderPersonal:function () {
        Ext.Viewport.setActiveItem(this.getOrderview());
        var allStore_Order=Ext.getStore('Store_Order');
        allStore_Order.setParams({u_id:localStorage.getItem('userid')})
        allStore_Order.load({
            callback:function(records,operation,success){
                if(success){
                   
                    
                    // 绑定数据到dataview
                    var dw=Ext.getCmp('all_order_personal');
                    dw.setItemTpl(tpl);
                    dw.setStore(this);
                }

            }
        });
        // }
    },
    dw_click:function (dw, index, item, record) {

        var number=record.get('number')
        sessionStorage.setItem('number',number)
        // top.location.reload()
        //self.location.reload()

        this.redirectTo('route_order_personal_detail');


    },

});

