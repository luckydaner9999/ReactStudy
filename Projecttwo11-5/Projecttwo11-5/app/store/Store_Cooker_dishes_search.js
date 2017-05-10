/**
 * Created by Administrator on 2016/10/16.
 */
Ext.define('private_cooker.store.Store_Cooker_dishes_search',{
    extend:'Ext.data.Store',
    requires:[
        'private_cooker.model.Model_Cooker_details',
        'private_cooker.util.Tools'
    ],
    config:{
        model:'private_cooker.model.Model_Cooker_details',
        autoLoad:true,
        autoDestroy:true,
        remoteSort:true,
        remoteFilter:false,
        proxy:{
            type:'jsonp',
            url:private_cooker.util.Tools.getDomain()+'/cooker_dishes/mobile',
            reader:{
                type:'json'
            }

        },
        pageSize:5,
        // sorters:[
        //     {
        //         property:'view_number',
        //         direction:'desc'
        //     }
        // ],
        scope:this
    }
});