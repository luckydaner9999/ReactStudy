var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res) {
  console.log('eeeeee')
  res.render('register');
});

router.post('/register', function(req, res, next) {
  console.log('ssss'+req.body);
  userDao.getUserById(req.body.telephone,function(result){


    //用户名已经存在
    if(result[0].num==1){
      res.json({res:1})
    }else if(result[0].num==0) {
      userDao.regist(req.body,function (_result){
        console.log('222'+_result.affectedRows);
        if(_result.affectedRows==1){
          //注册成功
          res.json({res:0})

        } else{
          //注册失败
          res.json({res:2})
        }
      })
    }
  })

});

router.post('/go_register', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  console.log('ssss'+req.body);
  userDao.getUserById(req.body.telephone,function(result){

    //用户名已经存在
    if(result[0].num==1){
      res.json({res:1})
    }else if(result[0].num==0) {
      userDao.regist(req.body,function (_result){
        console.log('222'+_result.affectedRows);
        if(_result.affectedRows==1){
          //注册成功
          res.json({res:0})

        } else{
          //注册失败
          res.json({res:2})
        }
      })
    }
  })

});

// router.get('/menu', function(req, res) {
//   // console.log(req.session.userID);
//   // res.render('su ccess');
//   filter.filt(req,res,'menu')
// });

module.exports = router;
