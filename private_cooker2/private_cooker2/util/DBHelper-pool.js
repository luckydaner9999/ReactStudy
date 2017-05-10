/*
 * Created by waltyuqing on 16/8/31.
 */
//连接池开一个数据
var dbconfig=require('../dbconfig');
var mysql=require('mysql');
var connect_pool=mysql.createPool(dbconfig.options);
connect_pool.connectionLimit=100;//由服务器的性能和用户群体决定的
connect_pool.queueLimit=200;
function getConnection(callback){
    connect_pool.getConnection(function(error,client){
        if(error){
            console.log(error.message);
            setTimeout(getConnection,2000);
        }
        callback(client)
    });

}
exports.getConnection=getConnection;

