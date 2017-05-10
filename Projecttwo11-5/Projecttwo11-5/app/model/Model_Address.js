/**
 * Created by lzhan on 16/10/11.
 */
Ext.define('private_cooker.model.Model_Address', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'address_id',  type: 'int'},
            {name: 'user_name',  type: 'string'},
            {name: 'sex',   type: 'string'},
            {name: 'province',   type: 'string'},
            {name: 'city',   type: 'string'},
            {name: 'area',   type: 'string'},
            {name: 'address_detail',   type: 'string'},
            {name: 'telephone',   type: 'int'},
        ]
    }
});