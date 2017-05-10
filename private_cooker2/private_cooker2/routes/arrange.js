/**
 * Created by waltyuqing on 16/9/18.
 */
var express = require('express');
var router = express.Router();
var arrangeDao=require('../dao/arrangeDao');

router.post('/arrange', function(req, res, next) {
    var index=1;
    var acount=12;
    var pages=1;
    if(req.body.index){
        index=req.body.index;
    }
    arrangeDao.arrange_cookers(index,acount,function(result){
        // console.log("routes,Ccuisine"+JSON.stringify(result));
        pages=Math.ceil(result.total/acount);
        console.log({cooker:result.res})
        res.json({pageAcount:pages,cookers:result.res});
    })
});
router.get('/arrange/mobile', function(req, res, next) {



    var index=1;
    var acount=5;
    var pages=1;
    var arrange='desc';
    if(req.query.page){
        index=parseInt(req.query.page);
    }
    if(req.query.limit){
        acount=parseInt(req.query.limit);
    }
    if(req.query.sort){
        var j_s=JSON.parse(req.query.sort);
        arrange=j_s[0].direction;
        var s=j_s[0].property;
        console.log(arrange)
    }
    arrangeDao.arrange_c_o(index,acount,arrange,s,function(result){
        // console.log("routes,Ccuisine"+JSON.stringify(result));
        pages=Math.ceil(result.total/acount);
        console.log({cooker:result.res})
        res.jsonp(result.res);
    })
});
module.exports = router;
