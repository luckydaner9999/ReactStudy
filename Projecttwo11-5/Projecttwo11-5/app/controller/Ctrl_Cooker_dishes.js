// 厨师个人信息
var tplCooker_d=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="details_container01">'+
    '<div class="details_icon_container01 ">' +
    '<img src="resources/images/{c_icon}" alt="">' +
    '</div>'+
    '<div class="details_cookers01"> '+
    '<p>' +
    '<span class="details_cooker_name">{c_name}</span>' +
    '<span class="details_orders_acount">&nbsp;&nbsp;·&nbsp;&nbsp;{order_count}</span>次预定</p>' +
    '<p><span>擅长：</span><span class="details_profession">&nbsp;&nbsp;{profession}</span></p>' +
    '<div class="dishes_level">' +
    '<p class="details_profession"><span><img src="resources/images/star{star_level}.png">{star_level}分</span></p>' +
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</tpl>'
);
// 菜品名称
var tplDishes=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="dishes_container"  onclick="addTocart(this)">' +
    '<div class="div_dishes_container" ><img src="resources/images/{di}" alt=""></div>' +
    '<div class="dishes_name_container">' +
    '<div class="dishes_name">{dn}</div>' +
    '<p class="check_btn"></p>' +
    '</div>' +
    '</div>'+
    '</tpl>');
var count=0;

Ext.define('private_cooker.controller.Ctrl_Cooker_dishes', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template',
        'private_cooker.util.Tools'
    ],
    config: {
        refs: {
            cooker_dishesview: {
                selector: 'cooker_dishes',
                xtype: 'cooker_dishes',
                autoCreate: true
            },
            cookerDetails:'#details_cooker01',
            back_details:'#back_details',
            s_dishes:'#s_dishes',
            // chose_d_n:'#dishes_name',
            go_order_btn:'#go_order_btn'

        },
        control:{
            back_details:{
                tap:function () {
                    this.redirectTo('route_details');
                }
            },
            s_dishes:{
                change:'func_s_dishes'
            },
            go_order_btn:{
                tap:'func_goOrder'
            }
        },
        routes:{
            'route_dishes':'showDishes'
        }
    },
    showDishes:function () {
        Ext.Viewport.setActiveItem(this.getCooker_dishesview());
        var allDishes_c=Ext.getStore('Store_Cooker_details');
        allDishes_c.clearFilter();
        allDishes_c.filter('c_id',sessionStorage.getItem('c_id'));
        // allArticles.setPageSize(10);
        allDishes_c.load({
            callback:function(records,operation,success){
                if(success){
                    // 厨师详情
                   var s=tplCooker_d.apply(records[0].data.res01);
                    Ext.getCmp('s_details').setHtml(s);
                }

            }
        });
        var allDishes=Ext.getStore('Store_Cooker_dishes');
        allDishes.clearFilter();
        allDishes.filter('c_id',sessionStorage.getItem('c_id'));
        // allArticles.setPageSize(10);

        allDishes.load({
            callback:function(records,operation,success){
                if(success){
                    // alert('okkkkkkkk'+records[0].data.dn);
                    dw=Ext.getCmp('dishes_name');
                    dw.setItemTpl(tplDishes);
                    dw.setStore(this);

                }

            }
        });

    },
    func_s_dishes:function (item, newValue, oldValue, eOpts) {
        var store = Ext.getStore('Store_Cooker_dishes_search');
        // alert(newValue);
        store.clearFilter();
        store.filter('dn', newValue);
        store.load({
            callback:function(records,operation,success){
                if(success){
                    // alert('okkkkkkkk'+records[0].data.dn);
                    dw=Ext.getCmp('dishes_name');
                    dw.setItemTpl(tplDishes);
                    dw.setStore(this);
                }

            }
        });
    },

    func_goOrder:function () {
        if(count<=0){
            swal({
                title: "您还没有选菜",
                text: "2s后自动关闭",
                timer: 2000,
                showConfirmButton: false
            });
        }else {
            /*Ext.Msg.alert('您还没有选菜');*/
            sessionStorage.setItem('price',158);
            this.redirectTo('route_order');
        }

    }
});
 function addTocart(a){
     var dishes_name=$(a).find('.dishes_name').text();
      if($(a).find('p').hasClass('check_btn')){
          $(a).find('p').removeClass('check_btn').addClass('check_btn_checked');
          count++;
          Ext.getCmp('cart_panel').setHtml('<div class="dishes_cart"> ' +
              '<img src="resources/images/cart.png" alt="">'+
              '</div>'+
              '<div  class="count">'+count+'</div>');
          if(count==0){
              Ext.getCmp('cart_panel').setHtml('<div class="dishes_cart"> ' +
                  '<img src="resources/images/cart.png" alt="">'+
                  '</div>');
          }else if(count>6){
              swal('只能选择六个菜');
              count=6;
              Ext.getCmp('cart_panel').setHtml('<div class="dishes_cart"> ' +
                  '<img src="resources/images/cart.png" alt="">'+
                  '</div>'+
                  '<div  class="count">6</div>');
              $(a).find('p').removeClass('check_btn_checked').addClass('check_btn');

          } else {
              Ext.getCmp('cart_panel').setHtml('<div class="dishes_cart"> ' +
                  '<img src="resources/images/cart.png" alt="">'+
                  '</div>'+
                  '<div  class="count">'+count+'</div>');
              $.ajax({
                  type: 'post',
                  url:private_cooker.util.Tools.getDomain()+'/cooker_menu/mobile',
                  data:{dish_name:dishes_name,cid:sessionStorage.getItem('c_id'),u_t:localStorage.getItem('userid')},
                  timeout: 3000,
                  dataType: 'json',

                  success: function (result) {
                  },
                  error: function (error) {
                      // alert('error')
                  }
                  // }

              });
          }

      }
      else {
          $(a).find('p').removeClass('check_btn_checked').addClass('check_btn');
          count--;
          if(count==0){
              Ext.getCmp('cart_panel').setHtml('<div class="dishes_cart"> ' +
                  '<img src="resources/images/cart.png" alt="">'+
                  '</div>');
          } else {
              Ext.getCmp('cart_panel').setHtml('<div class="dishes_cart"> ' +
                  '<img src="resources/images/cart.png" alt="">'+
                  '</div>'+
                  '<div  class="count">'+count+'</div>');
          }
          $.ajax({
              type: 'POST',
              url:private_cooker.util.Tools.getDomain()+ '/delete_dishes/mobile',
              data:{delete:dishes_name,u_t:localStorage.getItem('userid')},
              timeout: 3000,
              dataType: 'json',

              success: function (result) {
                  if(result.res==0){
                      // alert('删除成功')
                  }else{
                      /*alert('删除失败')*/
                  }

              },
              error: function (error) {
                  /*alert('error')*/
              }
              // }

          })
      }



    }




