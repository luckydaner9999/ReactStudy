/**
 * Created by Administrator on 2016/10/18.
 */

Ext.define('private_cooker.controller.Ctrl_Change_Header', {
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
            changeheaderview: {
                selector:'change_header',
                xtype:'change_header',
                autoCreate: true
            },
       btn_back_change_header_personal:'#btn_back_change_header_personal',
        },
        control:{
            btn_back_change_header_personal:{
                tap:'func_back_change_header_personal'
            },
        },
        routes: {
            'route_change_header_personal': 'showchangeheaderpersonal'
        }
    },
    func_back_change_header_personal:function () {
        this.redirectTo('route_personal_myaccount');
    },
    showchangeheaderpersonal:function () {
        var a=this
        Ext.Viewport.setActiveItem(this.getChangeheaderview());
        $('.change_uicon_change_header input').change(function(e){
            var file=e.target.files[0]
            var img=new Image();
            img.src=URL.createObjectURL(file);
            var url=img.src;
            var $img=$(img);
            img.onload=function(){
                URL.revokeObjectURL(url);
                $('.img_preview').empty().append($img);
            }

        })
        $('.uploadtwo_change_header').submit(function() {

            var formdata=new FormData($('.uploadtwo_change_header')[0])
            $.ajax({
                type:'post',
                url:private_cooker.util.Tools.getDomain()+'/change_header',
                data:formdata,
                timeout:3000,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (result) {
                    //alert(result)
                    //window.location.reload();
                   // location.href='/Projecttwo/#route_personal'
                    a.redirectTo('route_personal');
                },
                error: function (error) {
                    /* alert('error')*/
                }
            });
            return false;//阻止提交
        })
    }
});