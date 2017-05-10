/**
 * Created by Administrator on 2016/10/18.
 */
var privatemenuTpl=new Ext.XTemplate(
    '<tpl for=".">' +
    '<div class="private_meal_content">' +
    '<img src="{menubigimg}" class="private_meal_max_img" width="100%"/>' +
    '<div class="private_meal_menu"><span class="private_meal_border1"><span class="private_meal_border2">M E N U</span></span></div>' +
    '<br/><h3>- {menuname} -</h3>' +
    '<br/>' +
    '<ul>' +
    '<tpl for="menukind">' +
    '<li class="private_meal_list">【{colddish}】</li>' +
    '<tpl for="menulist">' +
    '<li class="private_dishesName">{dishes}</li>' +
    '</tpl>'+
    '<br/>'+
    '</tpl>'+
    '</ul>' +
    '<br/>' +
    '<h3>- 菜 品 展 示 -</h3>' +
    '<br/>' +
    '</div>'+
    '</tpl>'
);

var private_meal_serviceTpl=
    '<div class="private_meal_content"><br/><h3>- 服务须知 -</h3>' +
    '<br/>' +
    '<ul class="private_meal_service">' +
    '<li>· 私人订制宴会请至少提前两天预定 ·</li>' +
    '<li>· 费用含食材及厨师服务费 ·</li>' +
    '<li>· 成品以实物为准，图片仅供参考 ·</li>' +
    '<li>· 如有任何疑问，请联系私人厨师菜品研发部 ·</li>' +
    '<li> <a href="#" class="private_meal_telephone">电话：010-828-8888</a></li>' +
    '</ul>' +
    '<br/>' +
    '</div>';
var menupriceTpl=new Ext.XTemplate(
    '<tpl for=".">' +
    '<span class="private_meal_price">RMB {menuprice}/套</span>'+
    '</tpl>'
)
var privatename;
var privateprice;
var privateimg;
Ext.define('private_cooker.controller.Ctrl_Privatemeal', {
    extend: 'Ext.app.Controller',
    requires:[
        /*'private_cooker.model.Model_User',*/
        'private_cooker.util.Tools',
        'Ext.Template'
    ],
    init:function () {
        // Ext.getCmp('btn_go').setText('gogogo');
    },
    config: {
        refs: {
            privatemealview: {
                selector: 'privatemeal',
                xtype: 'privatemeal',
                autoCreate: true
            },
            _privatemeal:'#privatemeal_view',
            privatemeal1_back_private:'#privatemeal1_back_private',
            privatemeal2_back_private:'#privatemeal2_back_private',
            privatemeal3_back_private:'#privatemeal3_back_private',
            privatemeal4_back_private:'#privatemeal4_back_private',
            private_meal_go_order1:'#private_meal_go_order1',
            private_meal_go_order2:'#private_meal_go_order2',
            private_meal_go_order3:'#private_meal_go_order3',
            private_meal_go_order4:'#private_meal_go_order4'
        },
        control:{
            _privatemeal:{
                activeitemchange:'changeItem'
            },
            privatemeal1_back_private:{
                tap:'privatemeal1_back_private'
            },
            privatemeal2_back_private:{
                tap:'privatemeal2_back_private'
            },
            privatemeal3_back_private:{
                tap:'privatemeal3_back_private'
            },
            privatemeal4_back_private:{
                tap:'privatemeal4_back_private'
            },
            private_meal_go_order1:{
                tap:'private_meal_go_order1'
            },
            private_meal_go_order2:{
                tap:'private_meal_go_order2'
            },
            private_meal_go_order3:{
                tap:'private_meal_go_order3'
            },
            private_meal_go_order4:{
                tap:'private_meal_go_order4'
            }
        },
        routes: {
            'route_privatemeal1': 'showPrivatemeal1',
            'route_privatemeal2': 'showPrivatemeal2',
            'route_privatemeal3': 'showPrivatemeal3',
            'route_privatemeal4': 'showPrivatemeal4'
        }
    },
    showPrivatemeal1:function () {
        Ext.Viewport.setActiveItem(this.getPrivatemealview().setActiveItem(0));
        var private_store=Ext.getStore('Store_Privatemeal');
        private_store.load({
            callback:function (records,operation,success) {
                privateprice=records[0].data.menuprice;
                privatename=records[0].data.menuname;
                privateimg=records[0].data.menubigimg;
                var privatemenu=privatemenuTpl.apply(records[0].data);
                Ext.getCmp('private_menu_list').setHtml(privatemenu);
                var privatemenuprice=menupriceTpl.apply(records[0].data);
                Ext.getCmp('menuprice').setHtml(privatemenuprice);
                Ext.getCmp('private_meal1_service').setHtml(private_meal_serviceTpl);
            }
        });


    },
    showPrivatemeal2:function () {
        Ext.Viewport.setActiveItem(this.getPrivatemealview().setActiveItem(1));
        var private_store=Ext.getStore('Store_Privatemeal');
        private_store.load({
            callback:function (records,operation,success) {
                privateprice=records[1].data.menuprice;
                privatename=records[1].data.menuname;
                privateimg=records[1].data.menubigimg;
                var privatemenu=privatemenuTpl.apply(records[1].data);
                var privatemenuprice=menupriceTpl.apply(records[1].data);
                Ext.getCmp('menuprice2').setHtml(privatemenuprice);
                Ext.getCmp('private_menu2_list').setHtml(privatemenu);
                Ext.getCmp('private_meal2_service').setHtml(private_meal_serviceTpl);
            }
        });

    },
    showPrivatemeal3:function () {
        Ext.Viewport.setActiveItem(this.getPrivatemealview().setActiveItem(2));
        var private_store=Ext.getStore('Store_Privatemeal');
        private_store.load({
            callback:function (records,operation,success) {
                privateprice=records[2].data.menuprice;
                privatename=records[2].data.menuname;
                privateimg=records[2].data.menubigimg;
                var privatemenu=privatemenuTpl.apply(records[2].data);
                var privatemenuprice=menupriceTpl.apply(records[2].data);
                Ext.getCmp('menuprice3').setHtml(privatemenuprice);
                Ext.getCmp('private_menu3_list').setHtml(privatemenu);
                Ext.getCmp('private_meal3_service').setHtml(private_meal_serviceTpl);
            }
        });

    },
    showPrivatemeal4:function () {
        Ext.Viewport.setActiveItem(this.getPrivatemealview().setActiveItem(3));
        var private_store=Ext.getStore('Store_Privatemeal');
        private_store.load({
            callback:function (records,operation,success) {
                privateprice=records[3].data.menuprice;
                privatename=records[3].data.menuname;
                privateimg=records[3].data.menubigimg;
                var privatemenu=privatemenuTpl.apply(records[3].data);
                var privatemenuprice=menupriceTpl.apply(records[3].data);
                Ext.getCmp('menuprice4').setHtml(privatemenuprice);
                Ext.getCmp('private_menu4_list').setHtml(privatemenu);
                Ext.getCmp('private_meal_service').setHtml(private_meal_serviceTpl);
            }
        });

    },
    changeItem:function (obj,item) {
        if(item.getId()=='main_view'){
            this.redirectTo('route_main');
        }
    },
    privatemeal1_back_private:function (s, e, eOpts) {
        this.redirectTo('route_private');
    },
    privatemeal2_back_private:function (s, e, eOpts) {
        this.redirectTo('route_private');
    },
    privatemeal3_back_private:function (s, e, eOpts) {
        this.redirectTo('route_private');
    },
    privatemeal4_back_private:function (s, e, eOpts) {
        this.redirectTo('route_private');
    },
    private_meal_go_order1:function () {

        if(localStorage.getItem('userid')==null){
            sessionStorage.setItem('route','route_privatemeal1');
            this.redirectTo('route_login');
        }else {
            sessionStorage.setItem('order_dn',privatename);
            sessionStorage.setItem('price',privateprice);
            sessionStorage.setItem('img',privateimg);
            sessionStorage.setItem('c_id',101);
            sessionStorage.setItem('route','route_privatemeal1');
            this.redirectTo('route_order_details');
        }

    },
    private_meal_go_order2:function () {
        if(localStorage.getItem('userid')==null){
            sessionStorage.setItem('route','route_privatemeal2');
            this.redirectTo('route_login');
        }else {
            sessionStorage.setItem('order_dn',privatename);
            sessionStorage.setItem('price',privateprice);
            sessionStorage.setItem('img',privateimg);
            sessionStorage.setItem('c_id',103);
            this.redirectTo('route_order_details');
        }
    },
    private_meal_go_order3:function () {
        if(localStorage.getItem('userid')==null){
            sessionStorage.setItem('route','route_privatemeal3');
            this.redirectTo('route_login');
        }else {
            sessionStorage.setItem('order_dn',privatename);
            sessionStorage.setItem('price',privateprice);
            sessionStorage.setItem('img',privateimg);
            sessionStorage.setItem('c_id',104);
            this.redirectTo('route_order_details');
        }
    },
    private_meal_go_order4:function () {
        if(localStorage.getItem('userid')==null){
            sessionStorage.setItem('route','route_privatemeal4');
            this.redirectTo('route_login');
        }else {
            sessionStorage.setItem('order_dn',privatename);
            sessionStorage.setItem('price',privateprice);
            sessionStorage.setItem('img',privateimg);
            sessionStorage.setItem('c_id',105);
            this.redirectTo('route_order_details');
        }
    }
});
