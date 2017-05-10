/**
 * Created by waltyuqing on 16/9/21.
 */
var express = require('express');
var router = express.Router();
var cooker_menuDao=require('../dao/cooker_menuDao');
var privateDao=require('../dao/privateDao');
// router.all('/*',function(req, res, next){
//     res.setHeader(200,{'content_type':'text/html',"Access-Control-Allow-Origin":"*"})
// })
router.get('/order', function(req, res, next) {
 var a=req.query.u_id;
    var price;
    // var res2=[];
    if(a==null){
        redirect('/');
    }else {
        console.log(a);
        cooker_menuDao.sure_user_menu(a,function(result){
                console.log('resnnn22222:'+JSON.stringify(result));
                /* if(result.res.cid<100){
                     price='六人套餐/158元';
                     res2=res2.push(price);
                 }else{
                     price='私人订制套餐'+req.query.price+'元';
                     res2=res2.push(price);
                 }*/

            res.render('order',{res:result.res})

            })
            // console.log("routes,book"+JSON.stringify(result));
            // console.log('res22222:'+JSON.stringify(result.res11111))
            // res.render('order',{res:result.res})
        // })
    }

});
router.get('/order/sencha', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
    var a=req.query.u_id;
    console.log('333333'+a);
    var filter_value='';
    // var res2=[];


        cooker_menuDao.sure_user_menu(a,function(result){
            console.log('resnnn33333:'+JSON.stringify(result));
            /* if(result.res.cid<100){
             price='六人套餐/158元';
             res2=res2.push(price);
             }else{
             price='私人订制套餐'+req.query.price+'元';
             res2=res2.push(price);
             }*/

            res.jsonp(result.res)

        })
        // console.log("routes,book"+JSON.stringify(result));
        // console.log('res22222:'+JSON.stringify(result.res11111))
        // res.render('order',{res:result.res})
        // })


});
router.get('/order/sencha/detail', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
   var number=req.query.number
    console.log('uuuuuuu'+req.query.number)
 
    // var res2=[];

        cooker_menuDao.sure_user_menu2_m(number,function(result){
            console.log('resnnn22222:'+JSON.stringify(result));
          

            res.json(result)

        })

        // console.log("routes,book"+JSON.stringify(result));
        // console.log('res22222:'+JSON.stringify(result.res11111))
        // res.render('order',{res:result.res})
        // })
    

});
router.get('/order/sencha', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
    var a=req.query.u_id;

    console.log(a);
    cooker_menuDao.sure_user_menu3(a,function(result){
        console.log('resnnn22222:'+JSON.stringify(result));


        res.json(result)

    })



});

module.exports = router;