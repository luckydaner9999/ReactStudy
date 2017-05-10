/**
 * Created by waltyuqing on 16/9/19.
 */

var express = require('express');
var router = express.Router();
var cooker_menuDao=require('../dao/cooker_menuDao');

router.get('/delete_dishes', function(req, res, next) {


    var _delete=req.query.delete;
    cooker_menuDao.delete(_delete,function(result){
        // console.log("routes,book"+JSON.stringify(result));
        if(result.affectedRows==1){

            res.json({res:0})

        } else{
           
            res.json({res:2})
        }
        
    })

});
router.post('/delete_dishes', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
    var _delete=req.body.address_id;
    cooker_menuDao.delete_address(_delete,function(result){
        // console.log("routes,book"+JSON.stringify(result));
        if(result.affectedRows==1){

            res.json({res:0})

        } else{

            res.json({res:2})
        }

    })

});

router.post('/delete_dishes/mobile', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var _delete=req.body.delete;
    var u_t=req.body.u_t;
    console.log('yy'+JSON.stringify(req.body));
    cooker_menuDao.delete_dishes(_delete,u_t,function(result){
        console.log("routes"+result.affectedRows);
        if(result.affectedRows==1){
            res.json({res:0})
        } else{

            res.json({res:2})
        }

    })

});
module.exports = router;