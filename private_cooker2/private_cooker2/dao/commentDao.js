/**
 * Created by waltyuqing on 16/9/24.
 */
var DBPool=require('../util/DBHelper-pool');
module.exports={
    insert_comment:function(message,callback) {
    DBPool.getConnection(function (client) {
        if(message.image){
            client.query('insert  into comment01 (u_t,cid,content ,_time ,level ,image) values(?,?,?,?,?,?)',
                [message.u_t,message.cid,message.content,message.time,message.star,message.image],function (error,result) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    callback(result);
                    client.release();
                }

            )}else{
                client.query('insert  into comment01 (u_t,cid,content ,_time ,level ) values(?,?,?,?,?)',
                    [message.u_t,message.cid,message.content,message.time,message.star],function (error,result) {
                        if(error){
                            console.log(error.message);
                            return;
                        }
                        callback(result);
                        client.release();
                    })
            }


    })
},
}