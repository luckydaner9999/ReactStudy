/**
 * Created by waltyuqing on 16/9/14.
 */
var express = require('express');
var router = express.Router();
var cookerDao=require('../dao/cookerDao');

router.get('/cooker_detail', function(req, res, next) {

    cookerDao.single_cooker(req.query.index,function(result){
        // console.log("routes,book"+
      /*  if(req.session.userID==undefined){
            req.session.url='/cooker'
            res.redirect('/login')
        }else{*/
        
            res.render('cooker_menu',{res:result.res01,res02:result.res02,res03:result.res03,count:result.count,result_pic:result.result_pic});
        // }
    })


});


router.post('/cooker_detail/mobile',function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");

    console.log(req.body);
    // res.json({res: 'hello'});
    var index=req.body.id;
    cookerDao.single_cooker(index, function (result) {
        console.log('result_mobile'+result);
        res.json(result);
    });
});
router.get('/cooker_detail/mobile',function (req,res,next) {
     res.header("Access-Control-Allow-Origin", "*");
    console.log('c_d_m'+JSON.stringify(req.query));
    var index=1;

    if(req.query.filter){
        var s=JSON.parse(req.query.filter);
        console.log('gg'+JSON.stringify(s));
        index=s[0].value;
        // index=req.query.cid;
    }
    console.log('mmm'+JSON.stringify(req.query));
    cookerDao.single_cooker(index, function (result) {
        console.log('result>>>>>'+JSON.stringify(result));
        res.jsonp(result);

    })
});
router.get('/cooker_dishes/mobile',function (req,res,next) {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log('c_d_m'+JSON.stringify(req.query));
    var index=1;

    if(req.query.filter){
        var s=JSON.parse(req.query.filter);
        console.log('gg'+JSON.stringify(s));
        index=s[0].value;
        // index=req.query.cid;
    }
    console.log('mmm'+JSON.stringify(req.query));
    cookerDao.single_cooker(index, function (result) {
        console.log('result>>>>>'+JSON.stringify(result));
        res.jsonp(result.res02);

    })
});
module.exports = router;