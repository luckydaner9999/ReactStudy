/**
 * Created by Administrator on 2016/9/19.
 */
var DBPool=require('../util/DBHelper-pool');

module.exports={
    collection:function(c_id,u_id,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图

            // console.log('aaaaa'+totalAcount[0]);
            var sql2='SELECT count(*) num from collection WHERE cid=? and tel=?';

            client.query(sql2,[c_id,u_id],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                var sql='SELECT cooker.cid,cooker.ctelephone,collection.tel,cooker.cname,cooker._level,cooker._order,cooker.cooker_image,' +
                    'cooker.cooker_icon,GROUP_CONCAT(cuisine.cuisine) profession from user,collection,cooker,' +
                    'cooker_cuisine,cuisine WHERE user.telephone=collection.tel AND cooker.cid=collection.cid' +
                    ' AND cooker_cuisine.cid=cooker.cid AND cuisine.cuisine_id=cooker_cuisine.cuisine_id AND ' +
                    'user.telephone=? GROUP BY cooker.cid';
                client.query(sql,[u_id],function (error,result2) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    console.log('collection'+JSON.stringify(result2));
                    callback({res:result,res1:result2});
                    client.release();
                })
            });
        });

    },
    getCooker:function(c_id,u_id,callback) {
        DBPool.getConnection(function (client) {
            var sql1='INSERT INTO collection(cid,tel) VALUES(?,?)';
        client.query(sql1,[c_id,u_id],function (error,result2) {
            if(error){
                console.log(error.message);
                return;
            }
            callback({res1:result2});
            client.release();
        })
        })
},
    deletCookerByid:function(c_id,callback) {
        DBPool.getConnection(function (client) {
            var sql1='DELETE from collection WHERE cid=?';
            client.query(sql1,[c_id],function (error,result3) {
                if(error){
                    console.log(error.message);
                    return;
                }
                callback({res1:result3});
                client.release();
            })
        })
    },
    myCollect:function(u_id,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
                var sql='SELECT cooker.cid,collection.tel,cooker.cname,cooker._level,cooker._order,cooker.cooker_image,' +
                    'cooker.cooker_icon,GROUP_CONCAT(cuisine.cuisine) profession from user,collection,cooker,' +
                    'cooker_cuisine,cuisine WHERE user.telephone=collection.tel AND cooker.cid=collection.cid' +
                    ' AND cooker_cuisine.cid=cooker.cid AND cuisine.cuisine_id=cooker_cuisine.cuisine_id AND ' +
                    'user.telephone=? GROUP BY cooker.cid';
                client.query(sql,[u_id],function (error,result2) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    console.log('collection'+JSON.stringify(result2));
                    callback(result2);
                    client.release();
                })
            });


    },
    deletCookerByidpersonal:function(c_id,u_id,callback) {
        DBPool.getConnection(function (client) {
            var sql1='DELETE from collection WHERE cid=? and tel=?';
            client.query(sql1,[c_id,u_id],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

}
