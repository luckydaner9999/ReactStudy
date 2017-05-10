/**
 * Created by lzhan on 16/10/10.
 */
var tplcollect=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="cookers_container" id="{c_id}">'+
    '<div class="d_img_container"><img src="resources/images/{cooker_image}" alt=""></div>'+
    '<div class="cooker_d_container01 clearfix">'+
    '<div class="icon_container">'+
    '<img src="resources/images/{cooker_icon}" alt="">'+
    '</div>'+
    '<div class="d_container01">擅长：{profession} </div>'+
    '<div class="d_o_container01">预定数 </div>'+
    '</div>'+
    '<div class="cooker_d_container02">'+
    '<div class="c_name">{cname} </div>'+
    '<div class="d_container01">'+
    '<div class="star_level01"><div class="xingji">星级：</div>'+
    // '<img src="resources/images/star1.png">' +
    '<img src="resources/images/star{_level}.png">' +
    '</div>'+
    /*  '<div class="star_level02">{star_level}分</div>'+*/
    '</div>'+
    '<div class="d_o_container01 o_color">{_order}人次</div>'+
    '</div>'+
    '</div>'+
    '</tpl>'
);
Ext.define('private_cooker.controller.Ctrl_Collect_Personal', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template',
        'private_cooker.util.Tools'
    ],
    config: {
        refs: {
            collectview: {
                    selector:'collect_personal',
                    xtype:'collect_personal',
                    autoCreate: true
                },
                btnPersonal:'#btn_back_personal_collect',
                dwOrderPersonal:'#all_Collect_personal',
            },
        control:{
            btnPersonal:{
                tap:'func_show_personal_collect'
            },
            dwOrderPersonal:{
                itemtap:'dw_click',
                itemtaphold:'dw_hold'
            },

        },
        routes: {
            'route_collect_personal': 'showCollectPersonal',
        }

    },
    func_show_personal_collect:function () {
        this.redirectTo('route_personal');
    },
    showCollectPersonal:function () {
        Ext.Viewport.setActiveItem(this.getCollectview());
        var CollectStore_Order=Ext.getStore('Store_Collect');
        CollectStore_Order.setParams({u_id:localStorage.getItem('userid')})
        CollectStore_Order.load({
            callback:function(records,operation,success){
                if(success){
                    console.log(records)
                    // 绑定数据到dataview
                    var dw=Ext.getCmp('all_Collect_personal');
                    dw.setItemTpl(tplcollect);
                    dw.setStore(this);
                }

            }
        });
        // }
    },
    dw_click:function (dw, index, item, record) {

        var cid=record.get('cid')
        sessionStorage.setItem('c_id',cid);
        sessionStorage.setItem('route','route_collect_personal');
        this.redirectTo('route_details');
    },


});
/*
function show_collect() {
    $('.collections_container').click(function(){
            var c_id=$(this).find('.collect_c_id').text();
            sessionStorage.setItem('c_id',c_id);
            location.href='/Projecttwo/#route_details'
        });
    $('.cancel_collection_personal').click(
        function(){
            Ext.Msg.alert('',0.0000001)
            var c_id=$(this).find('.collect_c_id2').html();
            sessionStorage.setItem('c_id',c_id);
            $.ajax({
                type: 'POST',
                url: private_cooker.util.Tools.getDomain()+'/collect/personal',
                data:{c_id:sessionStorage.getItem('c_id'),u_id:localStorage.getItem('userid')},
                timeout: 3000,
                dataType: 'json',

                success: function (result) {
                    window.location.reload()
                    /!*alert(JSON.stringify(result));*!/
                },
                error: function (error) {
                    /!* alert('error')*!/
                }
                // }

            })
        }
    )
}*/
