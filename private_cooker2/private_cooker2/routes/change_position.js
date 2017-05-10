/**
 * Created by Administrator on 2016/9/20.
 */
var express = require('express');
var router = express.Router();
var change_positionDao=require('../dao/change_positionDao');
router.post('/change_position', function(req, res, next) {
    var u_id=req.body.u_id;
    change_positionDao.changePosition(u_id,function (result) {
        console.log('/change_position'+JSON.stringify(result));
        // res.render('cooker',{res:result});
        res.json({res:result});
    })


});
module.exports = router;