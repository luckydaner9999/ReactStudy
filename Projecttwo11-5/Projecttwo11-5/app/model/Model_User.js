/**
 * Created by Administrator on 2016/10/17.
 */
Ext.define('private_cooker.model.Model_User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'telephone',  type: 'string'},
            {name:'password',type:'string'}
        ]
        ,
        validations: [
            {type: 'presence',  field: 'telephone', message:'手机号不能为空'},
            {type: 'format',    field: 'telephone', matcher: /^1[3|4|5|7|8][0-9]{9}$/,message:'请填入正确的手机号'},
            {type: 'length',    field: 'password', min: 6,message:'密码大于6位'}
        ]
    },
    changeName: function() {
        var oldName = this.get('userId'),
            newName = oldName + " The Barbarian";
        this.set('userId', newName);
    }
});