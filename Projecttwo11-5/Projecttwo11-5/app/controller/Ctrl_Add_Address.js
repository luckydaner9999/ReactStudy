/**
 * Created by Administrator on 2016/10/18.
 */

Ext.define('private_cooker.controller.Ctrl_Add_Address', {
    extend: 'Ext.app.Controller',
    requires:[
        /*'private_cooker.model.Model_User',*/
        'private_cooker.util.Tools'
    ],
    init:function () {
        // Ext.getCmp('btn_go').setText('gogogo');
    },
    config: {
        refs: {
            addaddressview: {
                selector: 'add_address',
                xtype: 'add_address',
                autoCreate: true
            },
            btn_back_add_address_personal:'#btn_back_add_address_personal',
        },
        control:{
            btn_back_add_address_personal:{
                tap:'func_show_add_address_personal'
            },
        },
        routes: {
            'route_add_address': 'showAddAddress'
        }
    },
    func_show_add_address_personal:function () {
        // history.back();
        this.redirectTo('route_address_personal');


    },

    showAddAddress:function () {
        var back=this;
        Ext.Viewport.setActiveItem(this.getAddaddressview());
        
        var area = new lArea();
        area.init({
            'trigger': '#demo1',//触发选择控件的文本框，同时选择完毕后name属性输出到该位置
            'valueTo':'#value1',//选择完毕后id属性输出到该位置
            'keys':{id:'id',name:'name'},//绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
            'type':1,//数据源类型
            'data':lAreaData1//数据源
        });
        $('#button_tijiao').click(function () {
           // alert($('#demo1').val())
         if($('#demo1').val()!=''&&$('input[name=sex]').val()!=''&&$('#add_address_detail').val()!=''&&$('#user_name_address').val()!=''&&$('#user_name_tel').val()!=''){
            var c=$('#demo1').val();
            var  str = c.split(" ")
            var province=str[0]
            var city=str[1]
            var area=str[2]
            var sex=$('input[name=sex]').val()
            var address_detail=$('#add_address_detail').val()
            var tel=$('#user_name_tel').val()
            var user_name=$('#user_name_address').val()
            var u_t=localStorage.getItem('userid')

            $.ajax({
                type: 'POST',
                url: private_cooker.util.Tools.getDomain()+'/add_address',
                data:{u_t:u_t,user_name:user_name,sex:sex,prov:province,city:city,area:area,address_detail:address_detail,telephone:tel},
               dataType:'json',
                success: function (result) {
                    // console.log('res'+JSON.stringify(result.datas));
                  /*  Ext.Msg.alert('添加成功');*/
                  swal("添加成功","","success");
                   // location.href='/Projecttwo/#route_address_personal';
                    back.redirectTo('route_address_personal');


                },
                error: function (error) {
                    alert('error!!!!');

                }

            });
         }else{
             // Ext.Msg.alert('您还有信息未填');
             swal("您还有未填的信息");
         }

        })
    },
    changeItem:function (obj,item) {
        if(item.getId()=='main_view'){
            this.redirectTo('route_main');
        }
    }
});