/**
 * Created by lzhan on 16/10/10.
 */
var tpladdress=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="each_address_personal">' +
    '<div class="name_tel_address_personal"><span class="name_address_personal">{user_name}</span><span class="or_tel">{telephone}</span></div>' +
    '<div class="clearfix"></div>' +
    '<div class="details_address_personal">{province}{city}{area}{address_detail}</div>' +

    '</div>'+
    '</tpl>')
Ext.define('private_cooker.controller.Ctrl_Address_Personal', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template',
        'private_cooker.util.Tools'
    ],
    config: {
        refs: {
                addressview: {
                    selector:'address_personal',
                    xtype:'address_personal',
                    autoCreate: true
                },
            btn_back_address_personal:'#btn_back_address_personal',
            btn_add_address_personal:'#add_address_personalone',
            dw_all_address_personal:'#all_address_personal'

            },
        control:{

            btn_back_address_personal:{
                tap:'func_show_address_personal'
            },
            btn_add_address_personal:{
                tap:'func_add_address_personal'
            },
            dw_all_address_personal:{
                itemtaphold:'dw_hold',
                itemtap:'dw_click',
            }
        },
        routes: {
            'route_address_personal': 'showRoute_address_personal'
        }

    },
    func_show_address_personal:function () {
        this.redirectTo('route_personal');
    },
    func_add_address_personal:function(){
        this.redirectTo('route_add_address');
    },
    showRoute_address_personal:function () {
        Ext.Viewport.setActiveItem(this.getAddressview())
        var all_Store_Address=Ext.getStore('Store_Address');
        all_Store_Address.setParams({u_id:localStorage.getItem('userid')})
        all_Store_Address.load({
            callback:function(records,operation,success){
                if(success){

                    // 绑定数据到dataview
                    var dw_address=Ext.getCmp('all_address_personal');

                    dw_address.setItemTpl(tpladdress);

                    dw_address.setStore(this);
                }

            }
        });
    },
    dw_hold:function(dw,index,item,record){
        swal({
            title: "删除地址",
            text: "确定要删除么？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false
        },
            function(){

                if($('.confirm').text()=='确定'){
                    Ext.getStore('Store_Address').remove(record)
                    $.ajax({
                        type: 'post',
                        url: private_cooker.util.Tools.getDomain()+'/delete_dishes',
                        data:{address_id:record.data.address_id},
                        // dataType:'json',
                        success: function (result) {
                            // console.log('res'+JSON.stringify(result.datas));
                            /*Ext.Msg.alert('删除地址成功');*/
                            swal("删除成功", "", "success");

                        },
                        error: function (error) {
                            alert('error!!!!');

                        }

                    });
                }

        });
    },
    dw_click:function (dw, index, item, record) {
        var province=record.get('province')
        var city=record.get('city');
        var area=record.get('area');
        var user_name=record.get('user_name');
        var telephone=record.get('telephone');
        var address_detail=record.get('address_detail')
        sessionStorage.setItem('province',province);
        sessionStorage.setItem('city',city);
        sessionStorage.setItem('area',area);
        sessionStorage.setItem('address_detail',address_detail);
        sessionStorage.setItem('order_un',user_name);
        sessionStorage.setItem('otel',telephone);
        // history.back();
        this.redirectTo(sessionStorage.getItem('route'));
    }



});