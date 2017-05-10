/**
 * Created by lzhan on 16/10/10.
 */
Ext.define('private_cooker.controller.Ctrl_Main', {
    extend: 'Ext.app.Controller',
    requires:[
        'private_cooker.model.Model_User',
        'private_cooker.util.Tools',
        'Ext.data.JsonP'
    ],
    config: {
        refs: {
                mainview: {
                    selector: 'main',
                    xtype: 'main',
                    autoCreate: true
                },
                btnPersonal:'#personal_main',
                _main:'#main_view',
              main_hot_private_meal1:'#main_hot_private_meal1',
              main_hot_private_meal2:'#main_hot_private_meal2',
              main_service_explain:'#main_service_explain',
            guanfu:'#guanfu',
            qingzhen:'#qingzhen',
            yangsheng:'#yangsheng',
            jiachang:'#jiachang',
            cooker3:'#cooker3',
            cooker2:'#cooker2'
            },
        control:{

            _main:{
                activeitemchange:'changeItem'
            },
            main_hot_private_meal1:{
                tap:'main_hot_private_meal1'
            },
            main_hot_private_meal2:{
                tap:'main_hot_private_meal2'
            },
            main_service_explain:{
                tap:'main_service_explain'
            },
            guanfu:{
                tap:function () {
                    sessionStorage.setItem('dishes_cusine','官府');
                    sessionStorage.setItem('route','route_main');
                    this.redirectTo('route_cookers_s');
                }
            },
            qingzhen:{
                tap:function () {
                    sessionStorage.setItem('dishes_cusine','清真');
                    sessionStorage.setItem('route','route_main');
                    this.redirectTo('route_cookers_s');
                }
                },
            yangsheng:{
                tap:function () {
                    sessionStorage.setItem('dishes_cusine','养生');
                    sessionStorage.setItem('route','route_main');
                    this.redirectTo('route_cookers_s');
                }
            },
            jiachang:{
                tap:function () {
                    sessionStorage.setItem('dishes_cusine','家常');
                    sessionStorage.setItem('route','route_main');
                    this.redirectTo('route_cookers_s');
                }
            },
            cooker3:{
                tap:function () {
                    sessionStorage.setItem('c_id',3);
                    sessionStorage.setItem('route','route_main');
                    sessionStorage.setItem('c_name','王志');
                    this.redirectTo('route_details')
                }
            },
            cooker2:{
                tap:function () {
                    sessionStorage.setItem('c_id',2);
                    sessionStorage.setItem('c_name','王晓丽');
                    sessionStorage.setItem('route','route_main');
                    this.redirectTo('route_details')
                }
            }
        },
        routes: {
            'route_main': 'showMain'
        }

    },
    showMain:function () {
        Ext.Viewport.setActiveItem(this.getMainview().setActiveItem(0))
        $('.main_locate_city').html(localStorage.getItem('city'));
        var banner_play=Ext.getCmp('banner_play');
        // setInterval(function () {
        //     banner_play=Ext.ComponentQuery.query('carousel')[0];
        //     banner_play.next();
        //     if (banner_play.getActiveIndex() === banner_play.getMaxItemIndex()){
        //         banner_play.setActiveItem(0);
        //     }
        // },4000);
    },
    changeItem:function(obj,item){
        // localStorage.setItem('userid','18915543138');
            if(item.getId()=='personal_main'){
                if(localStorage.getItem('userid')==null){
                    sessionStorage.setItem('route','route_personal');
                    this.redirectTo('route_login');
                }else {
                    this.redirectTo('route_personal');
                }
            }
            if(item.getId()=='private_quote'){
                this.redirectTo('route_private');
            }
            if(item.getId()=='cooker'){
                this.redirectTo('route_cookers')
            }


    },
    main_hot_private_meal1:function () {
        sessionStorage.setItem('route','route_main');
        this.redirectTo('route_privatemeal1');
    },
    main_hot_private_meal2:function () {
        sessionStorage.setItem('route','route_main');
        this.redirectTo('route_privatemeal4');
    },
    main_service_explain:function () {
        this.redirectTo('route_service');
    }

});