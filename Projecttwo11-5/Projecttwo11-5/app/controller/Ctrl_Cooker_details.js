// 厨师个人信息
var self_detailsTpl=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="details_container">'+
    '<div class="details_icon_container clearfix">' +
    '<img src="resources/images/{c_icon}" alt="">' +
    '</div>'+
    '<div class="details_cookers"> '+
    '<div class="details_level">' +
    '<div class="d_star_level">' +
    '<img src="resources/images/star{star_level}.png"> ' +
    '</div>'+
    '</div>'+
    '<p>' +
    '<span class="details_cooker_name">{c_name}</span>' +
    '<span class="details_orders_acount">&nbsp;&nbsp;·&nbsp;&nbsp;{order_count}</span>次预定</p>' +
    '<p><span>擅长：</span><span class="details_profession">{profession}</span></p>' +
    '</div>'+
    '</div>'+
    '</div>'+
    '</tpl>'
);
// 评论
var commentTpl=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="cooker_comment">'+
       '<div class="top_container clearfix">'+
         '<div class="user_img_container"><img src="'+private_cooker.util.Tools.getDomain()+'/headers/{ui}"></div>'+
         '<div class="user_tel">{ut}</div>'+
         '<div class="coment_right_container">'+
             '<img src="resources/images/star{level}.png"><span class="score">{level}分</span>' +
         '</div>'+
        '</div>'+
      '<div class="comment_content clearfix">'+
         '<p class="comment_text">{cc}</p>'+
         '<div class="c_container">'+
         '<tpl if="image!=null">' +
         '<div class="comment_img_container"><img src="'+private_cooker.util.Tools.getDomain()+'/upload/{image}"></div><div class="comment_date">{_time}</div>'+
         '</tpl>'+
    '<tpl if="image==null">' +
    '<div class="comment_date1">{_time}</div>'+
    '</tpl>'+
         '</div>' +
      '</div>' +
    '</div>'+
'</tpl>'
);
var record;
Ext.define('private_cooker.controller.Ctrl_Cooker_details', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template',
        'private_cooker.util.Tools'
    ],
    config: {
        refs: {
            cooker_detailsview: {
                selector: 'cooker_details',
                xtype: 'cooker_details',
                autoCreate: true
            },
            chose:'#chose_dishes_btn',
            back_cookers:'#back_cookers',
            collect:'#details_collect',

        },
        control:{
            chose:{
                tap:'func_chose'
            },
            back_cookers:{
                tap:'func_back_cookers'
            },
            collect:{
                tap:'func_collect'
            }

        },
        routes:{
            'route_details':'showDetails'
        }
    },
    // 显示厨师详情
    showDetails:function () {
        Ext.Viewport.setActiveItem(this.getCooker_detailsview());

        // Ext.Msg.alert(sessionStorage.getItem('c_id'));
        var store_d=Ext.getStore('Store_Cooker_details');
        store_d.clearFilter();
        store_d.filter('c_id',sessionStorage.getItem('c_id'));
        store_d.load({
            callback:function(records,operation,success){
                if(success){
                    // alert(records[0].data.res01[0].c_id);
                     record=records[0].data.res01[0].c_id;
                    var self_d=self_detailsTpl.apply(records[0].data.res01[0]);
                            Ext.getCmp('self_details').setHtml(self_d);
                            // 图片轮播
                            Ext.getCmp('panel1').setHtml('<img style="width:100%;height: 200px;" src="resources/images/'+records[0].data.res02[0].di+'" alt="">')
                            Ext.getCmp('panel2').setHtml('<img style="width:100%;height: 200px;" src="resources/images/'+records[0].data.res02[1].di+'" alt="">')
                            Ext.getCmp('panel3').setHtml('<img style="width:100%;height: 200px;" src="resources/images/'+records[0].data.res02[2].di+'" alt="">')
                            Ext.getCmp('comment_total').setHtml('<span class="comment_total" ">'+records[0].data.count[0].num+'条点评</span>');
                            var cc=commentTpl.apply(records[0].data.res03);
                            Ext.getCmp('comment_details').setHtml(cc);
                }

            }
        });



    },
    // 选菜预定
    func_chose:function () {
        if(localStorage.getItem('userid')==null){
            sessionStorage.setItem('route','route_details');
            this.redirectTo('route_login');
        }else {
            sessionStorage.setItem('c_id',record);
            // alert(sessionStorage.getItem('c_id'));
            this.redirectTo('route_dishes');
        }

    },
    // 返回厨师页
    func_back_cookers:function () {

        this.redirectTo(sessionStorage.getItem('route'));
    },
    // 收藏厨师
    func_collect:function (s) {
        if(localStorage.getItem('userid')==null){
            sessionStorage.setItem('route','route_details');
            this.redirectTo('route_login');
        }else {
            if (s.getIconCls() == 'cancel_collect') {
                s.setIconCls('collect');
                $.ajax({
                    type: 'POST',
                    url: private_cooker.util.Tools.getDomain() + '/collect/mobile',
                    data: {index: sessionStorage.getItem('c_id'), u_id: localStorage.getItem('userid'), statu: 1},
                    timeout: 3000,
                    dataType: 'json',

                    success: function (result) {
                       /* Ext.Msg.alert('收藏成功');*/
                        /* alert(JSON.stringify(result));*/
                    },
                    error: function (error) {
                        /* alert('error')*/
                    }
                    // }

                })
            } else {
                s.setIconCls('cancel_collect');
                $.ajax({
                    type: 'POST',
                    url: private_cooker.util.Tools.getDomain() + '/collect/mobile',
                    data: {index: sessionStorage.getItem('c_id'), u_id: localStorage.getItem('userid'), statu: 0},
                    timeout: 3000,
                    dataType: 'json',

                    success: function (result) {
                      /*  Ext.Msg.alert('取消收藏');*/
                        /*alert(JSON.stringify(result));*/
                    },
                    error: function (error) {
                        /* alert('error')*/
                    }
                    // }

                })

            }
        }

    }




});

