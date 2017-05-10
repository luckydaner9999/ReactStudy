var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');
var filter=require('../util/filter')

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Express' });
});
router.get('/private_order1', function(req, res, next) {
  res.render('private_order1', { title: 'Express' });
});
router.get('/private_order2', function(req, res, next) {
  res.render('private_order2', { title: 'Express' });
});
router.get('/private_order3', function(req, res, next) {
  res.render('private_order3', { title: 'Express' });
});
router.get('/private_order4', function(req, res, next) {
  res.render('private_order4', { title: 'Express' });
});
router.get('/private_order5', function(req, res, next) {
  res.render('private_order5', { title: 'Express' });
});
router.get('/private_order6', function(req, res, next) {
  res.render('private_order6', { title: 'Express' });
});
router.get('/login', function(req, res) {
  console.log('wwwwwww')
  res.render('login',{url:req.query.url});
});
router.post('/login', function(req, res) {

  var user=req.body;
  var url=req.body.url;
  console.log(url);
  userDao.login(user,function (result) {
    console.log('user:'+user);
    if(result[0].num==0){
      res.json({res:0});
    }else{
      req.session.userID=req.body.telephone;
      if(req.session.url==undefined){
        res.json({result:1,url:req.body.url})
      } else
      {
        res.json({result:1,url:req.body.url});
      }
    }
  })
});



router.get('/', function(req, res) {
  // console.log(req.session.userID);
  // res.render('success');
  filter.filt(req,res,'index')
});

router.post('/go_login', function(req, res) {
  res.header("Access-Control-Allow-Origin","*");
  var user=req.body;
  var url=req.body.url;
  console.log(url+'>>>');
  userDao.login(user,function (result) {
    console.log(JSON.stringify(user)+'<<<<');
    if(result[0].num==0){
      res.json({res:0});
    }else{
      req.session.userID=req.body.telephone;
      if(req.session.url==undefined){
        res.json({result:1,url:req.body.url})
      } else
      {
        res.json({result:1,url:req.body.url});
      }
    }
  })
});
router.get('/go_login', function(req, res) {
  console.log('wwwwwww');
  res.json({url:req.query.url});
});
module.exports = router;
