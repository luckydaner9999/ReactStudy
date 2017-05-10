/**
 * Created by waltyuqing on 16/9/20.
 */
var DBPool=require('../util/DBHelper-pool');

module.exports={
   address:function(am,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
            client.query("insert into address (u_telephone,user_name,sex,province,city ,area ,address_detail,telephone) values(?,?,?,?,?,?,?,?) ",[am.u_t,am.user_name,am.sex,am.prov,am.city,am.area,am.address_detail,am.telephone],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }

                console.log('qqqq'+JSON.stringify(result))
                callback({res:result.affectedRows});
                client.release();

            });



        });

    },
    get_address:function(u_id,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
            client.query("SELECT address_id,u_telephone,user_name,sex,province, city,area,address_detail,telephone from address WHERE u_telephone=? ",[u_id],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }

                console.log('qqqq'+JSON.stringify(result))
                callback(result);
                client.release();


            });



        });

    },
    get_province:function(callback){//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
            client.query("SELECT * from province  ",function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }

                console.log('qqqq'+JSON.stringify(result))
                callback(result);
                client.release();


            });



        });

    },
    get_city:function(province,callback){//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
            client.query("select city from province_city where province=? ",[province],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }

                console.log('qqqq'+JSON.stringify(result))
                callback(result);
                client.release();


            });



        });

    }

}