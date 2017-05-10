/**
 * Created by Administrator on 2016/10/17.
 */
Ext.define('private_cooker.model.Model_Privatemeal', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name:'menuname',  type: 'string'},
            {name:'menuprice',type:'int'},
            {name:'menukind',type:'json'},
            {name:'menulist',type:'json'},
            {name:'menudishimg',type:'json'},
            {name:'menubigimg',type:'string'}
        ]
    }
});