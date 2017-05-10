/**
 * Created by waltyuqing on 16/9/12.
 */
var express = require('express');
var router = express.Router();
var cookerDao=require('../dao/cookerDao');

router.get('/cooker', function(req, res, next) {
    var index=1;
    var acount=12;
    var pages=1;
    if(req.query.index){
        index=req.query.index;
    }
    cookerDao.getcookers(index,acount,function(result){
        // console.log("routes,Ccuisine"+JSON.stringify(result));
        pages=Math.ceil(result.total/acount);
        res.render('cooker',{pageAcount:pages,cookers:result.res});
    })

});
router.post('/cooker', function(req, res, next) {
    var index=1;
    var acount=12;
    var pages=1;
    if(req.body.index){
        index=req.body.index;

    }
    cookerDao.getcookers(index,acount,function(result){
        // console.log("routes,book"+JSON.stringify(result));
        pages=Math.ceil(result.total/acount);
        console.log(pages);
        res.json({cookers:result.res});
    })

});
// router.post('/', function(req, res, next) {
//
//     cookerDao.search(req.name,res,function(result){
//         // console.log("routes,Ccuisine"+JSON.stringify(result));
//         if(result.name==undefined){
//             console.log('无')
//         }else{
//             console.log('有')
//         }
//
//
//
//
//     })
//
// });
router.get('/cooker/cookers', function(req, res, next) {
    console.log(JSON.stringify(req.query));
    var index=1;
    var acount=5;
    var pages=1;
    if(req.query.page){
        index=parseInt(req.query.page);
    }
    if(req.query.limit){
        acount=parseInt(req.query.limit);
    }
    cookerDao.getcookers_m(index,acount,function(result){

        console.log("routes,Ccuisine"+JSON.stringify(result));
        console.log(JSON.stringify(result.res));
        res.jsonp(result.res);


    })

});

module.exports = router;
