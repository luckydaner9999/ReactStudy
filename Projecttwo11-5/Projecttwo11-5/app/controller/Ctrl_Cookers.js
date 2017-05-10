
var tplCooker=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="cookers_container" id="{c_id}">'+
    '<div class="d_img_container"><img src="resources/images/{c_images}" alt=""></div>'+
    '<div class="cooker_d_container01 clearfix">'+
    '<div class="icon_container">'+
    '<img src="resources/images/{c_icon}" alt="">'+
    '</div>'+
    '<div class="d_container01">擅长：{profession} </div>'+
    '<div class="d_o_container01">预定数 </div>'+
    '</div>'+
    '<div class="cooker_d_container02">'+
    '<div class="c_name">{c_name} </div>'+
    '<div class="d_container01">'+
    '<div class="star_level01"><div class="xingji">星级：</div>'+
    // '<img src="resources/images/star1.png">' +
    '<img src="resources/images/star{star_level}.png">' +
    '</div>'+
  /*  '<div class="star_level02">{star_level}分</div>'+*/
'</div>'+
'<div class="d_o_container01 o_color">{order_count}人次</div>'+
'</div>'+
'</div>'+
    '</tpl>'
);
var s_tplCooker=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="cookers_container" id="{c_id}">'+
    '<div class="d_img_container"><img src="resources/images/{c_images}" alt=""></div>'+
    '<div class="cooker_d_container01 clearfix">'+
    '<div class="icon_container">'+
    '<img src="resources/images/{c_icon}" alt="">'+
    '</div>'+
    '<div class="d_container01">擅长：{profession} </div>'+
    '<div class="d_o_container01">预定数 </div>'+
    '</div>'+
    '<div class="cooker_d_container02">'+
    '<div class="c_name">{c_name} </div>'+
    '<div class="d_container01">'+
    '<div class="star_level01"><div class="xingji">星级：</div>'+
    '<img src="resources/images/star{star_level}.png">' +
   /* '<img src="resources/images/xingxing.png" alt="">'+
    '<img src="resources/images/xingxing.png" alt="">'+
    '<img src="resources/images/xingxing.png" alt="">'+
    '<img src="resources/images/xingxing.png" alt="">'+
    '<img src="resources/images/xingxing.png" alt="">'+*/
    '</div>'+
  /*  '<div class="star_level02">{star_level}分</div>'+*/
    '</div>'+
    '<div class="d_o_container01 o_color">{order_count}人次</div>'+
    '</div>'+
    '</div>'+
    '</tpl>'
);
var data_records;
Ext.define('private_cooker.controller.Ctrl_Cookers', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template'
    ],
    config: {
        refs: {
            cookersview: {
                selector: 'cookers',
                xtype: 'cookers',
                autoCreate: true
            },
            kkk:'#kkk',
            cookers:'#cookers_view',
            getDetails:'#cookers_container_panel',
            s_getDetails:'#s_cookers_container_panel',
            searchCooker:'#search_btn',
            cancel:'#cancel_btn',
            s_Cookers:'#s_field',
            arrange_order:'#arrange_o',
            arrange_total:'#comprehensive_ran',
            back_mains:'#back_mains'

        },
        control:{
            cookers:{
                activeitemchange:'changeItems'
            },
            getDetails:{
                itemtap:'dw_click'
            },
            s_getDetails:{
                itemtap:'dw_click'
            },
            // 搜索
            searchCooker:{
               tap:'func_search_btn'
            },
            s_Cookers:{
                change:'func_s_field'
            },
            // 取消按钮
            cancel:{
                tap:'func_cancel'
            },
            arrange_order:{
                tap:'func_arrange_o'
            },
            arrange_total:{
                tap:'func_arrange_total'
            },
            // 返回首页
            back_mains:{
                tap:'func_back_mains'
            }
        },
        routes:{
            'route_cookers':'func_showCookers',
            'route_cookers_s':'func_showCookers_s',

        }
    },
    // 显示厨师页
    func_showCookers:function () {
        Ext.Viewport.setActiveItem(this.getCookersview().setActiveItem(0));
         var allArticles=Ext.getStore('Store_Cooker');
        allArticles.load({
            callback:function(records,operation,success){
                if(success){
                        data_records=records;
                        dw=Ext.getCmp('cookers_container_panel');
                        dw.setItemTpl(tplCooker);
                        dw.setStore(this);
                }

            }

        });

    },
    // 取消
    func_cancel:function () {
        if(sessionStorage.getItem('route')=='route_cookers'){
            Ext.Viewport.setActiveItem(this.getCookersview().setActiveItem(0));
        }else {
            this.redirectTo(sessionStorage.getItem('route'));
        }
    },
    // 点击到厨师详情页
    dw_click:function (dw, index, item, record) {
      sessionStorage.setItem('c_id',record.get('c_id'));
      sessionStorage.setItem('c_name',record.get('c_name'));
        sessionStorage.setItem('route','route_cookers');
        this.redirectTo('route_details');
    },

    changeItems:function () {
        Ext.Viewport.setActiveItem(this.getCookersview());
    },
    // 搜索厨师或菜系
    func_search_btn:function () {
        sessionStorage.setItem('route','route_cookers');
        Ext.Viewport.setActiveItem(this.getCookersview().setActiveItem(1));
    },
  func_s_field:function (item, newValue, oldValue, eOpts) {
      var store=Ext.getStore('Store_Cooker_search');
      // alert(newValue);
      store.clearFilter();
      store.filter('profession',newValue);
      store.load({
          callback:function(records,operation,success){
              if(success){
                  data_records=records;
                  dw=Ext.getCmp('s_cookers_container_panel');
                  dw.setItemTpl(s_tplCooker);
                  dw.setStore(this);
              }

          }
      });

  },
    // 预订次数排序
    func_arrange_o:function (s) {
      // alert(s.getIconCls()=='o_up_btn');
        if(s.getIconCls()=='o_up_btn'){
            s.setIconCls('o_down_btn');
         var store=Ext.getStore('Store_Cooker_arrange_o');
         store.sort('order_count','DESC');
         store.load({
         callback:function(records,operation,success){
         if(success){
         data_records=records;
         dw=Ext.getCmp('cookers_container_panel');
         dw.setItemTpl(tplCooker);
         dw.setStore(this);
         }

         }
         })
        }
        else {
            s.setIconCls('o_up_btn');
            var store=Ext.getStore('Store_Cooker_arrange_o');
            store.sort('order_count','asc');
            store.load({
                callback:function(records,operation,success){
                    if(success){
                        // alert('okkk');
                        data_records=records;
                        dw=Ext.getCmp('cookers_container_panel');
                        dw.setItemTpl(tplCooker);
                        dw.setStore(this);
                    }

                }
            })
        }



    },
    // 综合排序
    func_arrange_total:function (s) {
        if(s.getIconCls()=='o_up_btn'){
            s.setIconCls('o_down_btn');
            var store=Ext.getStore('Store_Cooker_arrange_o');
            store.sort('c_id','DESC');
            store.load({
                callback:function(records,operation,success){
                    if(success){
                        // alert('okkk');
                        data_records=records;
                        dw=Ext.getCmp('cookers_container_panel');
                        dw.setItemTpl(tplCooker);
                        dw.setStore(this);
                    }

                }
            })
        }
        else {
            // alert('8888');
            s.setIconCls('o_up_btn');
            var store=Ext.getStore('Store_Cooker_arrange_o');
            store.sort('c_id','asc');
            store.load({
                callback:function(records,operation,success){
                    if(success){
                        // alert('okkk');
                        data_records=records;
                        dw=Ext.getCmp('cookers_container_panel');
                        dw.setItemTpl(tplCooker);
                        dw.setStore(this);
                    }

                }
            })
        }

    },
    // 返回首页
func_back_mains:function () {
    this.redirectTo('route_main');
},
    // 根据菜系显示厨师
 func_showCookers_s:function () {
     var c_allArticles=Ext.getStore('Store_Cooker');
     c_allArticles.load({
         callback:function(records,operation,success){
             if(success){
                 data_records=records;
                 dw=Ext.getCmp('cookers_container_panel');
                 dw.setItemTpl(tplCooker);
                 dw.setStore(this);
             }

         }

     });

     Ext.Viewport.setActiveItem(this.getCookersview().setActiveItem(1));
        var store=Ext.getStore('Store_Cooker_search');
        store.clearFilter();
        store.filter('profession',sessionStorage.getItem('dishes_cusine'));
        store.load({
            callback:function(records,operation,success){
                if(success){
                    data_records=records;
                    dw=Ext.getCmp('s_cookers_container_panel');
                    dw.setItemTpl(s_tplCooker);
                    dw.setStore(this);
                }

            }
        });
    }
});
