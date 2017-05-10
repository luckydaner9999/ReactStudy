/**
 * Created by waltyuqing on 16/9/22.
 */
var express = require('express');
var router = express.Router();
var cooker_menuDao=require('../dao/cooker_menuDao');
router.get('/delete_menu', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
    var number=req.query.number
    cooker_menuDao.delete_menu(number,function(result){
        // console.log("routes,book"+JSON.stringify(result));
        if(result.affectedRows>=1){
            res.json({res:0})

        } else{

            res.json({res:2})
        }

    })

});
module.exports = router;