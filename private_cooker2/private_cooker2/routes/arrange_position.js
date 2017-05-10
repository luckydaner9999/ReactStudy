/**
 * Created by Administrator on 2016/9/21.
 */
var express = require('express');
var router = express.Router();
var cookerDao=require('../dao/cookerDao');

router.post('/arrange_position', function(req, res, next) {
    console.log(JSON.stringify(req.body));
    var position = req.body.position;
    var tel = req.body.tel;
    cookerDao.getPid(tel, position, function (result) {
        console.log(JSON.stringify(result));
        console.log(result[0].pid);
        var index = 1;
        var acount = 12;
        var pages = 1;
        // pages = Math.ceil(result.total / acount);
        if (req.body.index) {
            index = req.body.index;
        }
        cookerDao.arrange_position(result[0].pid,index,acount, function (result2) {
            pages = Math.ceil(result2.pageAcount/acount);
            console.log('/arrange_position' + JSON.stringify(result2.res))
            console.log('/arrange_position111' + pages);
            res.json({pageAcount:pages,cookers:result2.res});
        })
    })
})




module.exports = router;