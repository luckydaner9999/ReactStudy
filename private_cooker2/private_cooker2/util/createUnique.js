/**
 * Created by waltyuqing on 16/9/10.
 */
function createFileName(){
    var date=new Date();
    var ran=Math.random();
    var datea=new Date('1970-1-1');
    var _name=ran.toString()+(date-datea);
    // _name=_name.split(".");
    return _name;
}
exports.createName=createFileName;