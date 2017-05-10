/**
 * Created by waltyuqing on 16/9/4.
 */


var DBPool=require('../util/DBHelper-pool');

module.exports={
    regist:function (user,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('insert into user(telephone,PASSWORD) values(?,?)',[user.telephone,user.password],function (error,result) {
                if(error){
                    console.log(error.message);
                    callback({affectedRows:2});
                    return;
                }
                callback(result);


            });
            client.release();
        });
    },
    login:function(user,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('select count(*) num  from user where telephone=? and PASSWORD=?',[user.telephone,user.password],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                console.log('1111'+JSON.stringify(result));
                callback(result);

            });
            client.release();
        });

    },
    getUserById:function (id,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('select count(*) num  from user where telephone=? ',[id],function (error,result) {
                if(error){
                    console.log('mmmmm'+error.message);
                    return;
                }
                console.log('getUserById'+JSON.stringify(result));
                callback(result);



            });
            client.release();
        });

    },
    header:function (u_telephone,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('select user_icon  from user where telephone=? ',[u_telephone],function (error,result) {
                if(error){
                    console.log('mmmmm'+error.message);
                    return;
                }
            
                callback({res:result});
                console.log({res:result})

                client.release();
            });

        });

    },
    getAccount:function (u_id,callback) {
        DBPool.getConnection(function (client) {
//调用视图
            client.query('SELECT * from user WHERE telephone=?; ',[u_id],function (error,result1) {
                if(error){
                    console.log('mmmmm'+error.message);
                    return;
                }
                console.log('getAccount'+JSON.stringify(result1));
                callback(result1);
                client.release();

            });
        });

    }
}

