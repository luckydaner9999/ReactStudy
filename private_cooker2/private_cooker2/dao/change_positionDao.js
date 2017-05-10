/**
 * Created by Administrator on 2016/9/20.
 */
var DBPool=require('../util/DBHelper-pool');

module.exports={
    changePosition:function(u_id,callback) {//index 表示第几页 acount表示一页显示几条
        DBPool.getConnection(function (client) {
            // console.log('aaaaa'+totalAcount[0]);
            client.query('SELECT address_id,area,address_detail from address WHERE u_telephone=?',[u_id],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                console.log('qqqq'+JSON.stringify(result));
                callback(result);
                client.release();
            });
        });

    }}