/**
 * Created by waltyuqing on 16/9/14.
 */
var express = require('express');
var router = express.Router();
var cookerDao=require('../dao/cookerDao');

router.post('/search', function(req, res,next) {
    var index=1;
    var pages=1;
    var acount=12;
    var content='';

    console.log('nnnn'+JSON.stringify(req.body));
    if(req.body.index){
        index=req.body.index;
    }
    if(req.body.search_input){
        content=req.body.search_input;
    }
        console.log('content'+content);
        cookerDao.search(content,index,acount,function (result) {
            pages=Math.ceil(result.pageAcount.total/acount);
            console.log('pages'+pages);
            console.log(result.res);
      
            // res.json({s_pageAcount:pages,res:result.res});
            // res.json({res:result});
            res.json({pageAcount:pages,cookers:result.res});
        })





});
router.post('/search/mobile', function(req, res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    var index=1;
    var pages=1;
    var acount=5;
    var content='';

    console.log('nnnn'+JSON.stringify(req.body));
    if(req.body.index){
        index=req.body.index;
    }
    if(req.body.content){
        content=req.body.content;
    }
    console.log('content'+content);
    cookerDao.searchCooker(content,function (result) {
        pages=Math.ceil(result.pageAcount.total/acount);
        console.log('pages'+pages);
        console.log(result.res);

        // res.json({s_pageAcount:pages,res:result.res});
        // res.json({res:result});
        res.json({pageAcount:pages,cookers:result.res});
    })





});
router.get('/search/mobile', function(req, res,next) {
    // res.header("Access-Control-Allow-Origin", "*");
    var index=1;
    var pages=1;
    var acount=5;
    var content='';

    console.log('nnnn'+JSON.stringify(req.query));
    if(req.query.index){
        index=req.body.index;
    }
    if(req.query.filter){
        var s=JSON.parse(req.query.filter);
        console.log('gg'+JSON.stringify(s));
        content=s[0].value;
    }
    console.log('content'+content);
    cookerDao.searchCooker(content,function (result) {
        pages=Math.ceil(result.pageAcount.total/acount);
        console.log('pages'+pages);
        console.log(result.res);

        // res.json({s_pageAcount:pages,res:result.res});
        // res.json({res:result});
        res.jsonp(result.res);
    })





});
module.exports = router;