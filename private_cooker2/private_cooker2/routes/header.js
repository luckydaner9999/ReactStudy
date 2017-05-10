/**
 * Created by waltyuqing on 16/9/18.
 */
var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');




router.post('/header', function(req, res) {
    // var user=req.body.connect;
    
        req.session.userID = null;
        var a = req.session.userID
        console.log('a' + a)
        res.json({result: 1})
})
router.get('/header', function(req, res) {
    // var user=req.body.connect;
    res.header("Access-Control-Allow-Origin","*")
    userDao.header(req.query.u_telephone,function(result) {

        res.json({res01:result.res})
        console.log({res01:result.res})

    })
})
router.get('/selfcenter', function(req, res, next) {
    res.render('selfcenter', { title: 'Express' });
});
module.exports = router;
