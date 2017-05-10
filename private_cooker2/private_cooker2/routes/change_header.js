/**
 * Created by waltyuqing on 16/9/26.
 */
var express = require('express');
var router = express.Router();
var cookerDao=require('../dao/cookerDao');
var formidable=require('formidable');
var util=require('util');
var AVATAR_UPLOAD_FOLDER='/headers/';
var createUnique=require('../util/createUnique');
var fs=require('fs');



router.post('/change_header', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
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
            res.send('只支持png和jpg格式图片');
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

            message.image=avatarName;
            message.u_t=fields.u_telephone;

            cookerDao.change_header(message, function (_result) {
                console.log('66666666')
                if (_result.affectedRows = 1) {
                    res.send('修改头像成功');

                    console.log('add img ----end')
                } else {
                    res.send('uploads fail');
                }
            })


        }

    })
});

module.exports = router;
