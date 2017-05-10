/**
 * Created by Administrator on 2016/9/23.
 */
var express = require('express');
var router = express.Router();
var privateDao=require('../dao/privateDao');

router.post('/order_private_menu', function(req, res, next) {
   var u_id=req.body.u_id;
   var cid=req.body.cid;
   var dishes_name=req.body.private;
   var price=req.body.price;
    privateDao.getPrivates(u_id,cid,dishes_name,price,function (result) {
        console.log("Ccuisine///"+u_id,cid,dishes_name,price);
        console.log("Ccuisine result///"+JSON.stringify(result));
        res.json({res:result.affectedRows});
    })

});

module.exports = router;
