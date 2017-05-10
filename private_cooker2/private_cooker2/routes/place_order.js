/**
 * Created by waltyuqing on 16/9/19.
 */
var express = require('express');
var router = express.Router();
var cooker_menuDao=require('../dao/cooker_menuDao');
router.post('/place_order', function(req, res, next) {
    var u_t=req.body.u_t;

    cooker_menuDao.countdishes(u_t ,function(result){
        // console.log("routes,book"+JSON.stringify(result));
        
        if(result[0].num==0){
            res.json({res:0});
        }else{
            res.json({res:1});
        }

    })

});

module.exports = router;
