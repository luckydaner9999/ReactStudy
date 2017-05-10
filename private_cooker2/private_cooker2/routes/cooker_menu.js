/**
 * Created by waltyuqing on 16/9/19.
 */
var express = require('express');
var router = express.Router();
var cooker_menuDao=require('../dao/cooker_menuDao');
router.post('/cooker_menu', function(req, res, next) {

    var dish_name=req.body.dish_name;
    var cid=req.body.cid;
    var u_t=req.body.u_t;

    cooker_menuDao.getdishes(cid,u_t,dish_name,function(result){
        // console.log("routes,book"+JSON.stringify(result));

        res.json({res:result.res});
        console.log(res)
    })

});

router.post('/cooker_menu/mobile', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var dish_name=req.body.dish_name;
    console.log('jjjj'+dish_name);
    var cid=req.body.cid;
    var u_t=req.body.u_t;

    cooker_menuDao.getdishes(cid,u_t,dish_name,function(result){
        // console.log("routes,book"+JSON.stringify(result));

        res.json({res:result.res});
        console.log('mobtll'+res);
    })

});
module.exports = router;