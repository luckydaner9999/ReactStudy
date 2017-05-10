/**
 * Created by Administrator on 2016/9/20.
 */
var DBPool=require('../util/DBHelper-pool');

module.exports={
    getPosition:function (u_id,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('SELECT address_id,city,area,address_detail from address WHERE u_telephone=?',[u_id],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                callback(result);
                client.release();

            });
        });
    }




}