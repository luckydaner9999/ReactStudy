/**
 * Created by waltyuqing on 16/9/26.
 */

var DBPool=require('../util/DBHelper-pool');

module.exports={
getUserById:function (password,u_t,callback) {

    DBPool.getConnection(function (client) {
//调用视图
        client.query('select count(*) num  from user where telephone=? and password=?',[u_t,password],function (error,result) {
            if(error){
                console.log('mmmmm'+error.message);
                return;
            }

            console.log('aaaaaa'+JSON.stringify(result))
            console.log('aaaaaa'+{res:result.num})
            callback(result);



        });
        client.release();
    });

},
    changeUserById:function (confirm_password,u_t,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('update  user set password=?  where telephone=? ',[confirm_password,u_t],function (error,result) {
                if(error){
                    console.log('mmmmm'+error.message);
                    return;
                }

               
                callback(result);



            });
            client.release();
        });

    }


}