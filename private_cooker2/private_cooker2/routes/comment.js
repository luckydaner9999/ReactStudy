/**
 * Created by waltyuqing on 16/9/19.
 */
var express = require('express');
var router = express.Router();
var commentDao=require('../dao/commentDao');
var formidable=require('formidable');
var util=require('util');
var AVATAR_UPLOAD_FOLDER='/upload/';
var createUnique=require('../util/createUnique');
var fs=require('fs');

router.get('/comment', function(req, res, next) {
        res.render('comment')

});

router.post('/comment', function(req, res, next) {



var form=new formidable.IncomingForm();
form.parse(req,function(err,fields,files) {
        if (err) {
                response.local.error = err;
                //response.render('upload');
                return;
        }
        var extName='';
        console.log('files.in_file.type:'+files.fileImage.type);
        switch (files.fileImage.type){
                case 'image/jpeg':
                        extName = 'jpeg';
                        break;
                case 'image/jpg':
                        extName = 'jpg';
                        break;
                case 'image/png':
                        extName = 'png';
                        break;
                case 'image/x-png':
                        extName = 'x-png';
                        break;
        }
        if(extName.length==0){
                var message={};
                message.cid=fields.cid;
                message.u_t=fields.u_t;
                message.content=fields.content;
                message.star=fields.star;
                message.time=fields.time;
                commentDao.insert_comment(message, function (_result) {
                        if (_result.affectedRows = 1) {
                                res.send('评论成功');

                                console.log('add img ----end')
                        } else {
                                res.send('uploads fail');
                        }
                })
                return;
        }else {
                form.uploadDir = '../public' + AVATAR_UPLOAD_FOLDER;
                form.keepExtensions = true;  //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小
                console.log('here');
                var avatarName = createUnique.createName() + '.' + extName;//随机产生一个文件名
                var newPath = form.uploadDir + avatarName;
                console.log(newPath);
                console.log('old' + files.fileImage.path)
                fs.renameSync(files.fileImage.path, newPath);
                var message={};
                message.cid=fields.cid;
                message.image=avatarName;
                message.u_t=fields.u_t;
                message.content=fields.content;
                message.star=fields.star;
                message.time=fields.time;
                commentDao.insert_comment(message, function (_result) {
                        if (_result.affectedRows = 1) {
                                res.send('uploads success');
                               
                                console.log('add img ----end')
                        } else {
                                res.send('uploads fail');
                        }
                })


        }

        })
});
router.post('/comment/sencha', function(req, res, next) {

        res.header("Access-Control-Allow-Origin","*")
        console.log(req.body)

        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files) {
                if (err) {
                        response.local.error = err;
                        //response.render('upload');
                        return;
                }
                var extName='';
                console.log('files.in_file.type:'+files.fileImage.type);
                switch (files.fileImage.type){
                        case 'image/jpeg':
                                extName = 'jpeg';
                                break;
                        case 'image/jpg':
                                extName = 'jpg';
                                break;
                        case 'image/png':
                                extName = 'png';
                                break;
                        case 'image/x-png':
                                extName = 'x-png';
                                break;
                }
                if(extName.length==0){
                        var message={};
                        message.cid=fields.cid;
                        message.u_t=fields.u_t;
                        message.content=fields.content;
                        message.star=fields.star;
                        message.time=fields.time;
                        commentDao.insert_comment(message, function (_result) {
                                if (_result.affectedRows = 1) {
                                        res.send('评论成功');

                                        console.log('add img ----end')
                                } else {
                                        res.send('uploads fail');
                                }
                        })
                        return;
                }else {
                        form.uploadDir = '../public' + AVATAR_UPLOAD_FOLDER;
                        form.keepExtensions = true;  //保留后缀
                        form.maxFieldsSize = 2 * 1024;   //文件大小
                        console.log('here');
                        var avatarName = createUnique.createName() + '.' + extName;//随机产生一个文件名
                        var newPath = form.uploadDir + avatarName;
                        console.log(newPath);
                        console.log('old' + files.fileImage.path)
                        fs.renameSync(files.fileImage.path, newPath);
                        var message={};
                        message.cid=fields.cid;
                        message.image=avatarName;
                        message.u_t=fields.u_t;
                        message.content=fields.content;
                        message.star=fields.star;
                        message.time=fields.time;
                        commentDao.insert_comment(message, function (_result) {
                                if (_result.affectedRows = 1) {
                                        res.send('uploads success');

                                        console.log('add img ----end')
                                } else {
                                        res.send('uploads fail');
                                }
                        })


                }

        })
});
        
module.exports = router;