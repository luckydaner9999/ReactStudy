/**
 * Created by waltyuqing on 16/9/19.
 */
var express = require('express');
var router = express.Router();
var cooker_menuDao=require('../dao/cooker_menuDao');
var filter=require('../util/filter');
var privateDao=require('../dao/privateDao');

router.get('/order_details', function(req, res, next) {
var cid=req.query.cid;
    var u_t=req.query.u_t;
    var price=req.query.price;
    console.log(u_t);
    console.log(price);
    if(cid<=100){
        cooker_menuDao.selectdishes(cid,u_t,function(result){
            // console.log("routes,book"+JSON.stringify(result));
            console.log("routes,book"+JSON.stringify(result));
            console.log("routes,book"+JSON.stringify(result));
            res.render('order_details',{res:result.res,res2:result.res02,res3:158});
        })
    }else {
    privateDao.getPrivatesorders(u_t,cid,function(result) {
    console.log("routes,book/////"+JSON.stringify(result));
        res.render('order_details',{res:result.res,res2:result.res02,res3:price});

})
    }


});
//
// router.get('/order', function(req, res) {
//   // console.log(req.session.userID);
//   // res.render('success');
//   if(req.session.userID==undefined){
//     res.redirect('/')
//   }else{
//     res.render('order')
//   }
//
// });
router.post('/order_details/mobile', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var cid=req.body.cid;
    var u_t=req.body.u_t;
    var price=req.body.price;
    console.log(u_t);
    console.log(price);
    cooker_menuDao.selectdishes(cid,u_t,function(result){
        console.log("routes,book"+JSON.stringify(result));
        res.json({res:result.res,res2:result.res02,res3:158});
    })



});

module.exports = router;