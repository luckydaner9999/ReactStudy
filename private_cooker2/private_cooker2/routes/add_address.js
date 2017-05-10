/**
 * Created by waltyuqing on 16/9/20.
 */
var express = require('express');
var router = express.Router();
var add_addressDao=require('../dao/add_addressDao');

router.post('/add_address', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var am=req.body;
    add_addressDao.address(am,function(result){
        console.log("routes,Ccuisine"+JSON.stringify(result));
        res.json({res:1});

    })

});
router.get('/add_address/address', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var u_id=req.query.u_id;
    add_addressDao.get_address(u_id,function(result){
        console.log("routes,Ccuisine"+JSON.stringify(result));
        res.jsonp(result);

    })

});
// router.get('/add_address/province', function(req, res, next) {
//
//     add_addressDao.get_province(function(result){
//         console.log("province"+JSON.stringify(result));
//         res.jsonp(result);
//
//     })
//
// });
// router.get('/add_address/city', function(req, res, next) {
//     var province=req.query.province;
//     add_addressDao.get_city(province,function(result){
//         console.log("city"+JSON.stringify(result));
//         res.jsonp(result);
//
//     })
//
// });

module.exports = router;
