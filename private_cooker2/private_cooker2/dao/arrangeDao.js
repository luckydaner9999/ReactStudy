/**
 * Created by waltyuqing on 16/9/18.
 */
var DBPool=require('../util/DBHelper-pool');
module.exports={
    arrange_cookers:function(index,acount,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
            client.query('SELECT COUNT(DISTINCT(c_id)) total  FROM Ccuisine  ',function (error,totalAcount) {
                if(error){
                    console.log(error.message);
                    return;
                }
                // console.log('aaaaa'+totalAcount[0]);
                client.query('select c_id,c_name,c_icon,star_level,order_count,c_images,group_concat(profession ) profession from Ccuisine  group by c_id  ORDER BY order_count desc limit ?,?',[(index-1)*acount,acount],function (error,result) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    console.log('totalAcount:<<'+JSON.stringify(totalAcount[0]));

                    callback({total:totalAcount[0].total,res:result});
                    client.release();



                });


            });
        });

    },
    arrange_cookers_two:function(index,acount,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
            client.query('SELECT COUNT(DISTINCT(c_id)) total  FROM Ccuisine  ',function (error,totalAcount) {
                if(error){
                    console.log(error.message);
                    return;
                }
                // console.log('aaaaa'+totalAcount[0]);
                client.query('select c_id,c_name,c_icon,star_level,order_count,c_images,group_concat(profession ) profession from Ccuisine  group by c_id  ORDER BY order_count  asc limit ?,?',[(index-1)*acount,acount],function (error,result) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    console.log('totalAcount:<<'+JSON.stringify(totalAcount[0]));

                    callback({total:totalAcount[0].total,res:result});
                    client.release();



                });


            });
        });

    },
    arrange_c_o:function(index,acount,arrange,s,callback) {//index 表示第几页 acount表示一页显示几条
        console.log(arrange);
        DBPool.getConnection(function (client) {
//调用视图
            client.query('SELECT COUNT(DISTINCT(c_id)) total  FROM Ccuisine  ',function (error,totalAcount) {
                if(error){
                    console.log(error.message);
                    return;
                }
                // console.log('aaaaa'+totalAcount[0]);
                client.query('select c_id,c_name,c_icon,star_level,order_count,c_images,group_concat(profession) profession from Ccuisine  group by c_id  ORDER BY '+s+' '+arrange+' limit ?,?',[(index-1)*acount,acount],function (error,result) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    console.log('totalAcount:<<'+JSON.stringify(totalAcount[0]));

                    callback({total:totalAcount[0].total,res:result});
                    client.release();



                });


            });
        });

    }
}