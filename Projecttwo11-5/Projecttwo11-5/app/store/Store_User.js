
Ext.define('private_cooker.store.Store_User',{
    extend:'Ext.data.Store',
    requires:[
        'private_cooker.model.Model_User',
        'private_cooker.util.Tools'
    ],
    config:{
        model:'private_cooker.model.Model_User',
        proxy:{
            type:'jsonp',
            url:private_cooker.util.Tools.getDomain()+'/go_login',
            reader:{
                type:'json'
            }

        }
        /*listeners:{
            load:function(store,records,successful){
                if(!successful){
                    Ext.Msg.alert('加载数据失败，请检查网络设置');
                }else{
                    alert('ok');
                }
            }
        }*/
    }
});




//SQL 语句


/*
client.query('select id, title,content,introduction,author,CONCAT_WS("-",year(date),month(date),day(date)) date,icon,view_number from article where title like ? or introduction like ? or content like ? order by '+sort_field+' '+sort_type+' limit 0,? ',[f_v,f_v,f_v,acount*index],function (error,result) {
    if(error){
        console.log(error.message);
        return;
    }
    //[{total:12}]
    callback({total:totalAcount[0].total,res:result});
    client.release();

});*/



//服务器端路由


/*
var index=1;
var acount=3;
// var pages=1;
var sort_field='date';
var sort_type='asc';
var filter_value='';
if(req.query.page){
    index=parseInt(req.query.page);
}
if(req.query.limit){
    acount=parseInt(req.query.limit);
}
if(req.query.sort){
    var j_sort=JSON.parse(req.query.sort);
    sort_field=j_sort[0].property;
    sort_type=j_sort[0].direction;
}


if(req.query.filter){
    var j_filter=JSON.parse(req.query.filter);
    filter_field=j_filter[0].property;
    filter_value=j_filter[0].value;
    console.log('>>>>>>'+filter_field+">>>>>>>"+filter_value);
}
articleDAO.getBooks(index,sort_field,sort_type,acount,filter_value,function (result) {
    console.log("routes,books"+JSON.stringify(result));

    pages=Math.ceil(result.total/acount);

    // res.render('article',{pageAcount:pages,books:result.res});
    res.jsonp(result.res);
})*/
