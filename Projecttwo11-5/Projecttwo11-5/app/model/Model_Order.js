/**
 * Created by lzhan on 16/10/11.
 */
Ext.define('private_cooker.model.Model_Order', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'time',  type: 'string'},
            {name: 'price',   type: 'string'},
            {name: 'c_id',   type: 'string'},
            {name: 'c_name',   type: 'string'},
            {name: 'c_icon',   type: 'string'},
            {name: 'u_telephone',   type: 'string'},
            {name: 'tel',   type: 'string'},
            {name: 'message',   type: 'string'},
            {name: 'name',   type: 'string'},
            {name: 'number',   type: 'string'}


        ]
    }
});