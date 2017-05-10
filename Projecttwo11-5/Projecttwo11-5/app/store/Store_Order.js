

Ext.define('private_cooker.store.Store_Order',{
    extend:'Ext.data.Store',
    requires:[
        'private_cooker.model.Model_Order',
        'private_cooker.util.Tools'
    ],

    config:{
        model:'private_cooker.model.Model_Order',
        autoLoad:true,
        autoDestroy:true,
        remoteFilter:true,
        remoteSort:true,//true表示服务器端排序,false 前端排序
        proxy:{
            type:'jsonp',
            url:private_cooker.util.Tools.getDomain()+'/order/sencha',
            reader:{
                type:'json'
            }},
        pageSize:2,
        // sorters:[
        //     {
        //         property:'Id',
        //         direction:'desc'
        //     }
        // ],
        scope:this,
        listeners:{
            load:function(store,records,successful){
                if(!successful){
                    Ext.Msg.alert('加载数据失败，请检查网络设置');
                }else{
                    // var recordCount=records.length;
                    // Ext.Msg.alert(recordCount+'');
                   //  console.log(records[0].data.tittle);
                    //console.log(recordCount);
                    //var pageSize=this.getPageSize();
                    //pageCount=Math.ceil(recordCount/pageSize);
                    //console.log("pagecount"+pageCount);
                    //Ext.Msg.alert(records.length.toString());
                }
            }
        }
    }
});