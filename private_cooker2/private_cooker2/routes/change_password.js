/**
 * Created by waltyuqing on 16/9/26.
 */
var express = require('express');
var router = express.Router();
var change_passwordDao=require('../dao/change_passwordDao');
router.get('/change_password', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
    var u_t=req.query.u_t;
    var password=req.query.change_password;
    change_passwordDao.getUserById(password,u_t,function (result) {
        console.log('qqq'+result.num)
        if(result[0].num==1){
            res.json({res:1})
        }else{
            res.json({res:0})
        }

        
    })


});
router.post('/change_password', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
    var u_t=req.body.u_t;
    var confirm_password=req.body.change_password;
    change_passwordDao.changeUserById(confirm_password,u_t,function (result) {
    if(result.affectedRows==1){
        res.json({res:1})
    }else{
        res.json({res:0})
    }


    })


});
module.exports = router;