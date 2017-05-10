/**
 * Created by lzhan on 16/5/19.
 */
Ext.define('private_cooker.util.Tools',{
    singleton:true,
    config:{
       // domain:'http://localhost:8080',
   // domain:'http://115.28.11.192:8080',
       domain:'http://10.40.7.21:8080',
       // domain:'http://192.168.0.4:8080'

    },
    constructor:function(config) {
        this.initConfig(config);
    },
    showInfo:function () {
        return '>>>>>>web-domain:'+this.getDomain() +" author:"+ this.getAuthor();
    }
});
