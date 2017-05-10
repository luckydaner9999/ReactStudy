/**
 * Created by waltyuqing on 16/9/21.
 */
var express = require('express');
var router = express.Router();
var cooker_menuDao=require('../dao/cooker_menuDao');
var filter=require('../util/filter')
router.post('/update_user_menu', function(req, res, next) {

       var detail=req.body;
    console.log('ggggtt'+JSON.stringify(req.body))
    cooker_menuDao. update_user_menu(detail,function(result){
        // console.log("routes,book"+JSON.stringify(result));
        console.log('<<<'+JSON.stringify(result))
        if(result.affectedRows>=1){
            res.json({res:1})
        }else{
            res.json({res:2})
        }
    })
});
router.post('/update_user_menu/mobile', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var detail=req.body;
    console.log('ggggtt'+JSON.stringify(req.body))
    cooker_menuDao. update_user_menu(detail,function(result){
        // console.log("routes,book"+JSON.stringify(result));
        console.log('<<<'+JSON.stringify(result))
        if(result.affectedRows>=1){
            res.json({res:1})
        }else{
            res.json({res:2})
        }
    })
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

// router.get('/order', function(req, res) {
//     // console.log(req.session.userID);
//     // res.render('success');
//     filter.filt(req,res,'order')
// });
module.exports = router;
