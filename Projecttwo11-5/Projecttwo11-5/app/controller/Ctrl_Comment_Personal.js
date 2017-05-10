/**
 * Created by lzhan on 16/10/10.
 */
Ext.define('private_cooker.controller.Ctrl_Comment_Personal', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.Template',
        'private_cooker.util.Tools'
    ],
    config: {
        refs: {
                commentview: {
                    selector: 'comment_personal',
                    xtype: 'comment_personal',
                    autoCreate: true
                },
            btn_back_personal_comment:'#btn_back_personal_comment',
            comment_personal_button:'#comment_personal_button',
            },

        control:{

            btn_back_personal_comment:{
                 tap:'func_btn_back_personal_comment'
             },
            comment_personal_button:{
                tap:'func_comment_personal_button'
            }
        },
        routes: {
            'route_comment_personal': 'showRouteCommentPersonal'
        }

    },
    showRouteCommentPersonal:function () {
        Ext.Viewport.setActiveItem(this.getCommentview());
    },
    func_btn_back_personal_comment:function(){
        this.redirectTo('route_order_personal_detail');
    },
    func_comment_personal_button:function(){
        // var txt = '发货速度：' + Ext.getCmp('usefull').getValue() + '<br/>'
        // Ext.Msg.alert('系统提示', txt);
        var d = new Date();
        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
        Ext.getCmp('time').setValue(str)
        var star2=Ext.getCmp('starone').getValue().toString();
        //alert(star2)
        Ext.getCmp('star').setValue(star2)
        Ext.getCmp('comment_personal_cid').setValue(sessionStorage.getItem('c_id'))
        var formdata=new FormData(Ext.getDom('form_personal_comment'));
        //alert(JSON.stringify(formdata))
        //alert(JSON.stringify(Ext.getCmp('form_personal_comment').getValues()))
        $.ajax({
            type: 'post',
            url: private_cooker.util.Tools.getDomain()+'/comment/sencha',
            data:formdata,
            // dataType:'json',
            async:false,
            cache:false,
            contentType:false,
            processData:false,
            success: function (result) {
                // console.log('res'+JSON.stringify(result.datas));
                // Ext.Msg.alert('评论成功');
                swal("评论成功", "感谢您的评价", "success");
            },
            error: function (error) {
                alert('error');

            }

        });
        Ext.getCmp('starone').setValue('0');
        Ext.getCmp('comment_personal_content').setValue("");
        this.redirectTo('route_order_personal');
    }
});