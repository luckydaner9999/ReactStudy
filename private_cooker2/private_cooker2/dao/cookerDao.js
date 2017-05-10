/**
 * Created by waltyuqing on 16/9/12.
 */
var DBPool=require('../util/DBHelper-pool');

module.exports={
    getcookers:function(index,acount,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
            client.query('SELECT COUNT(DISTINCT(c_id)) total  FROM Ccuisine  ',function (error,totalAcount) {
                if(error){
                    console.log(error.message);
                    return;
                }
                // console.log('aaaaa'+totalAcount[0]);
                client.query('select c_id,c_name,c_icon,star_level,order_count,c_images,group_concat(profession) profession from Ccuisine group by c_id  limit ?,?',[(index-1)*acount,acount],function (error,result) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
               console.log('totalAcount:<<'+JSON.stringify(totalAcount[0]));

                    callback({total:totalAcount[0].total,res:result});
                    client.release();



                });


            });
        });

    },
    change_header:function(message,callback) {//index 表示第几页 acount表示一页显示几条

        DBPool.getConnection(function (client) {
//调用视图
            client.query('update  user set user_icon=? where telephone= ? ',[message.image,message.u_t],function (error,result) {
                if(error){
                    console.log(error.message);
                    return;
                }
                // console.log('aaaaa'+totalAcount[0]);


                callback(result);

                client.release();
            });
        });
    },
    single_cooker:function(index,callback){
        DBPool.getConnection(function (client) {
//调用视图
                console.log(index)
                // console.log('aaaaa'+totalAcount[0]);
                client.query('select c_id,c_name,c_icon,star_level,order_count,c_images,group_concat(profession) profession from Ccuisine   where c_id=?',[index],function (error,result) {
                    if (error) {
                        console.log(error.message);
                        return;
                    }
                    client.query('select dd,dn,di,cc_cid from c_dishes where cc_cid=? ', [index], function (error, result_cid) {
                        if (error) {
                            console.log(error.message);
                            return;
                        }
                        client.query('select ut,ui,cc,_time,uid ,cid,level,image from CUcomment  where cid=? order by _time desc', [index], function (error, result_cid01) {
                            if (error) {
                                console.log(error.message);
                                return;
                            }
                            client.query('select count(*) num  from CUcomment where  cid=? ', [index], function (error, count) {
                                if (error) {
                                    console.log(error.message);
                                    return;
                                }

                                // for(var i=0;i<=result_cid01.length;i++) {
                                //     client.query('select uid,cid,pic  from cpcomment where cid=? and uid=? ', [index, result_cid01[i].uid], function (error, result_pic) {
                                //         if (error) {
                                //             console.log(error.message);
                                //             return;
                                //         }
                                //     });


                                    // var result=JSON.stringify(result[0])
                                    console.log({res: result, res02: result_cid, res03: result_cid01});

                                    callback({res01: result, res02: result_cid, res03: result_cid01, count: count});
                                    client.release();
                                // }
                            })
                    });
                });
                });
    })},
    search: function(content,index,acount,callback){
        DBPool.getConnection(function (client) {
            console.log(content);
            client.query('SELECT COUNT(*) total  FROM Ccuisine  where profession like ?',  ['%' + content + '%'],function (error, totalAcount) {
                if (error) {
                    console.log(error.message);
                    return;
                }
                client.query('select * from Ccuisine where profession like ? limit ?,?', ['%' + content + '%',(index-1)*acount,acount], function (error, result) {
                    if (error) {
                        console.log(error.message);
                        return;
                    }
                    // ===将jSon转换为字符串传输
                    console.log(JSON.stringify(totalAcount));
                 
                    callback({pageAcount:totalAcount[0],res:result});
                    client.release();
                })
            })
        })
    },
    getPid: function(tel,position,callback){
            DBPool.getConnection(function (client) {
                console.log(position,tel);
                client.query('SELECT position.pid from position,address WHERE position.area=? AND u_telephone=?;',[position,tel],function (error,pid) {
                    if (error) {
                        console.log(error.message);
                        return;
                    }
                    callback(pid);
                    client.release();
               })
            })
        },
    arrange_position: function(pid,index,acount,callback){
        DBPool.getConnection(function (client) {
            console.log(pid,index,acount);
            client.query('SELECT count(*) total from cooker WHERE pid=? ',[pid],function (error,totalAcount) {
                if (error) {
                    console.log(error.message);
                    return;
                }
                var sql='SELECT cooker.cid c_id,cooker.pid,cooker.cname c_name,cooker._level star_level,' +
                    'cooker._order order_count,cooker.cooker_icon c_icon,cooker.cooker_image c_images,' +
                    'GROUP_CONCAT(cuisine.cuisine) profession FROM cooker,' +
                    'cooker_cuisine,cuisine WHERE cooker.cid=cooker_cuisine.cid AND' +
                    ' cuisine.cuisine_id=cooker_cuisine.cuisine_id and cooker.pid=? GROUP BY cooker.cid limit ?,?'

                client.query(sql, [pid,(index-1)*acount,acount], function (error, result) {
                    if (error) {
                        console.log(error.message);
                        return;
                    }
                    // ===将jSon转换为字符串传输
                    console.log('arrange'+JSON.stringify(totalAcount));

                    callback({pageAcount:totalAcount[0].total,res:result});
                    client.release();
                })
            })
        })
    },
    searchCooker: function(content,callback){
        DBPool.getConnection(function (client) {
            console.log(content);
            client.query('SELECT COUNT(*) total  FROM c_cuisine  where profession like ?',  ['%' + content + '%'],function (error, totalAcount) {
                if (error) {
                    console.log(error.message);
                    return;
                }
                client.query('select * from c_cuisine where profession like ? or c_name like ?', ['%' + content + '%','%' + content + '%'], function (error, result) {
                    if (error) {
                        console.log(error.message);
                        return;
                    }
                    // ===将jSon转换为字符串传输
                    console.log(JSON.stringify(totalAcount));

                    callback({pageAcount: totalAcount[0], res: result});
                    client.release();
                })
            })

        })
    },
    getcookers_m:function(index,acount,callback) {//index 表示第几页 acount表示一页显示几条
        console.log('fffffmmm'+index+'  '+acount);
        DBPool.getConnection(function (client) {
//调用视图
            client.query('SELECT COUNT(DISTINCT(c_id)) total  FROM Ccuisine  ',function (error,totalAcount) {
                if(error){
                    console.log(error.message);
                    return;
                }
                // console.log('aaaaa'+totalAcount[0]);
                client.query('select c_id,c_name,c_icon,star_level,order_count,c_images,group_concat(profession) profession from Ccuisine group by c_id  limit ?,?',[(index-1)*acount,acount],function (error,result) {
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    console.log('totalAcount:<<'+JSON.stringify(totalAcount[0]));

                    callback({total:totalAcount[0].total,res:result});
                    client.release();



                });


            });
        });

    },
}


