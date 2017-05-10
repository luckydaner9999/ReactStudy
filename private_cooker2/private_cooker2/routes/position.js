/**
 * Created by Administrator on 2016/9/19.
 */
var express = require('express');
var router = express.Router();
var positionDao=require('../dao/positionDao');

router.post('/position', function(req, res, next) {
console.log(JSON.stringify(req.body));
       var u_id=req.body.u_id;
       positionDao.getPosition(u_id,function (result) {
              res.json({res:result});
       })
});

module.exports = router;
