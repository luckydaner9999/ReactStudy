/**
 * Created by Administrator on 2016/9/21.
 */
var express = require('express');
var router = express.Router();
var collectionDao=require('../dao/collectionDao');

router.get('/collect', function(req, res,next) {
    console.log('ORDER  ' + JSON.stringify(req.query));
    var c_id = req.query.index;
    var u_id = req.query.u_id;
    if (req.query.statu==0) {
        collectionDao.deletCookerByid(c_id,function (result) {
            console.log('orderr result++delete' + JSON.stringify(result));
            res.json({cooker:result.res1.affectedRows,cooker:result.res1})
        })
    }else {
        collectionDao.collection(c_id, u_id, function (result) {
            console.log('orderr result++' + JSON.stringify(result));
            if (result.res[0].num==0) {
                collectionDao.getCooker(c_id, u_id, function (result2) {
                    console.log('getCookers///>>>' + JSON.stringify(result2));
                    res.json({cooker:result.res1.affectedRows,cooker:result.res1})
                    // res.redirect('/cooker_detail');
                })


            }
        })

    }

});
router.post('/collect', function(req, res) {
 console.log('ORDER  ' + JSON.stringify(req.body));
 var u_id = req.body.u_id;
 collectionDao.myCollect(u_id,function (result) {
 res.json({res:result});
 })
 });
router.get('/collect/sencha', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var u_id = req.query.u_id;
    console.log(u_id)
    collectionDao.myCollect(u_id,function (result) {
        console.log(JSON.stringify(result))
        res.jsonp(result);
    })
})
router.post('/collect/mobile', function(req, res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('ORDER  ' + JSON.stringify(req.body));
    var c_id = req.body.index;
    console.log('ORDER  ' + JSON.stringify(c_id));
    var u_id = req.body.u_id;
    if (req.body.statu==0) {
        collectionDao.deletCookerByid(c_id,function (result) {
            console.log('orderr result++delete' + JSON.stringify(result));
            res.json(result);
        })
    }else {
        collectionDao.collection(c_id, u_id, function (result) {
            console.log('orderr result++' + JSON.stringify(result));
            if (result.res[0].num==0) {
                collectionDao.getCooker(c_id, u_id, function (result2) {
                    console.log('getCookers///>>>' + JSON.stringify(result2));
                    res.json(result2);

                    // res.redirect('/cooker_detail');
                })


            }
        })

    }

});
router.post('/collect/personal', function(req, res,next) {
    res.header("Access-Control-Allow-Origin", "*");

    var c_id = req.body.c_id;

    var u_id = req.body.u_id;

    collectionDao.deletCookerByidpersonal(c_id,u_id,function (result) {

        res.json(result);
    })
})


module.exports = router;
