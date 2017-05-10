/**
 * Created by Administrator on 2016/10/16.
 */
Ext.define('private_cooker.store.Store_Cooker_search',{
    extend:'Ext.data.Store',
    requires:[
        'private_cooker.model.Model_Cooker',
        'private_cooker.util.Tools'
    ],
    config:{
        model:'private_cooker.model.Model_Cooker',
        autoLoad:false,
        autoDestroy:true,
        // 服务器端搜索
        remoteFilter:true,
        // 排序
        // remoteSort:true,
        proxy:{
            type:'jsonp',
            url:private_cooker.util.Tools.getDomain()+'/search/mobile',
            reader:{
                type:'json',
                rootProperty: "list"
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
        // listeners:{
        //     load:function(store,records,successful){
        //         if(!successful){
        //             Ext.Msg.alert('加载数据失败，请检查网络设置');
        //         }else{
        //             Ext.Msg.alert('加载数据成功');
        //
        //             // var recordCount=records.length;
        //             // Ext.Msg.alert(recordCount+'');
        //             // console.log(records[0].data);
        //             // console.log(recordCount);
        //             //var pageSize=this.getPageSize();
        //             //pageCount=Math.ceil(recordCount/pageSize);
        //             //console.log("pagecount"+pageCount);
        //             //Ext.Msg.alert(records.length.toString());
        //         }
        //     }
        // }
    }
});