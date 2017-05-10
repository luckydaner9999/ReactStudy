/**
 * Created by Administrator on 2016/9/20.
 */
var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');

router.post('/myAccount', function(req, res, next) {
    console.log(JSON.stringify(req.body));
    var u_id=req.body.u_id;
   userDao.getAccount(u_id,function (result) {
       console.log('/myAccount'+JSON.stringify(result));
       console.log('sendddd'+JSON.stringify({res:result}));
        res.json({res:result});
    })
});

module.exports = router;
