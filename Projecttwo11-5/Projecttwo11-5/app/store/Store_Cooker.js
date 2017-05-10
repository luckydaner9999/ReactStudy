/**
 * Created by Administrator on 2016/10/16.
 */
Ext.define('private_cooker.store.Store_Cooker',{
    extend:'Ext.data.Store',
    requires:[
        'private_cooker.model.Model_Cooker',
        'private_cooker.util.Tools'
    ],
    config:{
        model:'private_cooker.model.Model_Cooker',
        autoLoad:false,
        autoDestroy:true,
        // 前端搜索
        // remoteFilter:true,
        pageSize:5,
        proxy:{
            type:'jsonp',
            url:private_cooker.util.Tools.getDomain()+'/cooker/cookers',
            reader:{
                type:'json',
                rootProperty: "dataview"
            }
        },
        scope:this

    }
});