/**
 * Created by waltyuqing on 16/9/18.
 */
var express = require('express');
var router = express.Router();
var arrangeDao=require('../dao/arrangeDao');

router.post('/arrange_two', function(req, res, next) {
    var index=1;
    var acount=12;
    var pages=1;
    if(req.body.index){
        index=req.body.index;
    }
    arrangeDao.arrange_cookers_two(index,acount,function(result){
        // console.log("routes,Ccuisine"+JSON.stringify(result));
        pages=Math.ceil(result.total/acount);
        console.log({cooker:result.res})
        res.json({pageAcount:pages,cookers:result.res});
    })

});

module.exports = router;