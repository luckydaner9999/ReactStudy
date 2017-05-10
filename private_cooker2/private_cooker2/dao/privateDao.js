/**
 * Created by Administrator on 2016/9/24.
 */
var DBPool=require('../util/DBHelper-pool');

module.exports={
getPrivates:function (u_id,cid,dishes_name,price,callback) {
    DBPool.getConnection(function (client) {
//调用视图
        var sql='INSERT into user_menu(u_telephone,cid,dishes_name,price)  VALUES(?,?,?,?)';

        client.query(sql,[u_id,cid,dishes_name,price],function (error,result) {
            if(error){
                console.log('mmmmm'+error.message);
                return;
            }
            console.log('getAccount'+JSON.stringify(result));
            callback(result);
            client.release();

        });
    });

},
getPrivatesorders:function (u_id,cid,callback) {
        DBPool.getConnection(function (client) {

            var sql='SELECT u_telephone,dishes_name,cid  FROM user_menu WHERE state=0 and u_telephone=? and cid=?';

            client.query(sql,[u_id,cid],function (error,result) {
                client.query("select address_id,u_telephone,user_name,sex,province,city ,area ,address_detail,telephone from address where u_telephone=?",[u_id],function (error,result2) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                  console.log('res:::::'+JSON.stringify(result))
                    callback({res:result,res02:result2});
                    client.release();
                });
            });
        });

    },
updateordersByPid:function (u_id,priId,dishes_name,time,number,_name,tel,u_address,_message,
                            dinner_date,dinner_time,callback) {
        DBPool.getConnection(function (client) {
//调用视图
            var sql='INSERT into user_Pmenu(u_telephone,priId,dishes_name,time,number,name,tel,address,message,'+
            'dinner_date,dinner_time)  VALUES(?,?,?,?,?,?,?,?,?,?,?)';

            client.query(sql,[u_id,priId,dishes_name,time,number,_name,tel,u_address,_message,
                dinner_date,dinner_time],function (error,result) {
                if(error){
                    console.log('mmmmm'+error.message);
                    return;
                }
                console.log('updateordersByPid'+JSON.stringify(result));
                callback(result);
                client.release();

            });
        });

    },
    sure_user_menu:function(a,callback) {

        DBPool.getConnection(function (client) {
            client.query('select time,c_name,c_icon,u_telephone,tel,message,number,address,ctelephone,name,dishes_name from user_Pmenu where u_telephone=? group by time,c_name,c_icon,u_telephone,tel,message,number,address,name,ctelephone asc',[a],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                console.log({res:result})
                callback({res:result});

            });
            client.release();
        });}

}
