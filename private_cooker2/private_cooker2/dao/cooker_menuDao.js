/**
 * Created by waltyuqing on 16/9/17.
 */
var DBPool=require('../util/DBHelper-pool');

module.exports={
    getdishes:function(cid,u_t,dish_name,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
                client.query('insert into user_menu (cid,u_telephone,dishes_name) value(?,?,?) ',[cid,u_t,dish_name],function (error,result) {
                    if(error){
                        console.log(error.message);
                        return;
                    }


                    callback({res:result});




                });
            client.release();


        });

    },
    countdishes:function(u_t,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('select count(*) num  from user_menu where u_telephone=?',[u_t],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                console.log('aaaa'+result)
                callback(result);

            });

            client.release();

        });

    },
    selectdishes:function(cid,u_t,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query("select user_menu,cid, dishes_name ,u_telephone from user_menu where cid=? and u_telephone=? and state='0'",[cid,u_t],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                client.query("select address_id,u_telephone,user_name,sex,province,city ,area ,address_detail,telephone from address where u_telephone=?",[u_t],function (error,result2) {
                    if(error){

                        console.log(error.message);
                        return;
                    }

                    callback({res:result,res02:result2});




            });})

            client.release();

        });


    },
    update_user_menu:function(detail,callback) {

        DBPool.getConnection(function (client) {

            client.query('update  user_menu set number=?,state="1" ,time=? ,name=?,tel=?,address=?,dinner_date=?,dinner_time=?, message=?,price=? where cid=? and u_telephone= ? and state="0"', [detail.number, detail.time, detail._name, detail.tel, detail.u_address, detail.dinner_date, detail.dinner_time, detail._message,detail.price,detail.cid, detail.u_t], function (error, result) {
                // client.query(sql, [detail.cid, detail.u_t, detail.number, detail.time, detail._name, detail.tel, detail.u_address, detail.dinner_date, detail.dinner_time, detail._message,], function (error, result) {
                    if (error) {
                        console.log(error.message);
                        return;
                    }


                    callback(result);

                });

                client.release();
            });
    },
    sure_user_menu:function(a,callback) {
        DBPool.getConnection(function (client) {
            client.query('select time,price,dinner_date,dinner_time,c_id,c_name,c_icon,u_telephone,tel,message, number,address,ctelephone,name,group_concat(dishes_name) dishes_name from cooker_user_menu where u_telephone=? group by time,price,dinner_date,dinner_time,c_id,c_name,c_icon,u_telephone,tel,message,number,address,name,ctelephone order by time desc',[a],function (error,result) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    console.log({res:result});
                callback({res:result});
                    client.release();
            });

        });},
    sure_user_menu2:function(number,callback) {
        DBPool.getConnection(function (client) {
            client.query('select dinner_date,dinner_time, time,price,c_id,c_name,c_icon,u_telephone,tel,message,number,address,ctelephone,name,group_concat(dishes_name) dishes_name from cooker_user_menu where  number= ?  group by dinner_date,dinner_time, time,price,c_id,c_name,c_icon,u_telephone,tel,message,number,address,name,ctelephone asc',[number],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                callback(result);
                client.release();
            });

        });},
    delete:function(_delete,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('delete from user_menu where user_menu=? ',[_delete],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }

                callback(result);
                client.release();
            });
        });


    },
    delete_address:function(_delete,callback) {

        DBPool.getConnection(function (client) {
//调用视图
            client.query('delete from address where address_id=? ',[_delete],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                callback(result);
                client.release();
            });
        });


    },
    delete_menu:function(number,callback) {
        DBPool.getConnection(function (client) {
            console.log('delete_menu'+number)
//调用视图
            client.query('delete from user_menu where number=? ',[number],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                console.log('<<<<<<<'+result.affectedRows)
                callback(result);




            });

            client.release();

        });


    },
    delete_dishes:function(_delete,u_t,callback) {
        console.log('dbfff'+_delete);
        DBPool.getConnection(function (client) {
//调用视图
            client.query('delete from user_menu where dishes_name=? and u_telephone=? and state=0',[_delete,u_t],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }

                callback(result);
                client.release();
            });
        });


    },
    update_user_menu_m:function(detail,callback) {
        DBPool.getConnection(function (client) {

            client.query('update  user_menu set number=?,state="1" ,time=? ,name=?,tel=?,address=?,dinner_date=?,dinner_time=?, message=?,price=? where cid=? and u_telephone= ? and state="0"', [detail.number, detail.time, detail._name, detail.tel, detail.u_address, detail.dinner_date, detail.dinner_time, detail._message,detail.price,detail.cid, detail.u_t], function (error, result) {
                // client.query(sql, [detail.cid, detail.u_t, detail.number, detail.time, detail._name, detail.tel, detail.u_address, detail.dinner_date, detail.dinner_time, detail._message,], function (error, result) {
                if (error) {
                    console.log(error.message);
                    return;
                }


                callback(result);

            });

            client.release();
        });
    },
    sure_user_menu2_m:function(number,callback) {
        DBPool.getConnection(function (client) {
            client.query('select dinner_date,time,price,c_id,c_name,c_icon,u_telephone,tel,message,number,address,ctelephone,name,group_concat(dishes_name) dishes_name from cooker_user_menu where  number= ?  group by dinner_date, time,price,c_id,c_name,c_icon,u_telephone,tel,message,number,address,name,ctelephone asc',[number],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                callback(result);
                client.release();
            });

        });},
    sure_user_menu3:function(a,callback) {
        DBPool.getConnection(function (client) {
            client.query('select time,price,c_id,c_name,c_icon,u_telephone,tel,message,number,address,ctelephone,name,group_concat(dishes_name) dishes_name from cooker_user_menu where u_telephone=?  group by time,price,c_id,c_name,c_icon,u_telephone,tel,message,number,address,name,ctelephone asc',[a],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }

                callback(result);
                client.release();
            });

        });},

}