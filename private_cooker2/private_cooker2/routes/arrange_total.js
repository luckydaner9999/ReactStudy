/**
 * Created by waltyuqing on 16/9/18.
 */
var express = require('express');
var router = express.Router();
var cookerDao=require('../dao/cookerDao');

router.post('/arrange_total', function(req, res, next) {
    var index=1;
    var acount=12;
    var pages=1;
    if(req.body.index){
        index=req.body.index;
    }
    cookerDao.getcookers(index,acount,function(result){
        // console.log("routes,Ccuisine"+JSON.stringify(result));
        pages=Math.ceil(result.total/acount);
        console.log({cooker:result.res})
        res.json({pageAcount:pages,cookers:result.res});
    })

});

module.exports = router;