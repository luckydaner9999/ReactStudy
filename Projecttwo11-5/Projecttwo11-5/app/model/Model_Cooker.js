/**
 * Created by Administrator on 2016/10/16.
 */
Ext.define('private_cooker.model.Model_Cooker', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'c_id',  type: 'int'},
            {name: 'c_name',   type: 'string'},
            {name: 'c_icon',   type: 'string'},
            {name: 'star_level',   type: 'int'},
            {name: 'profession',   type: 'string'},
            {name: 'order_count',   type: 'int'},
            {name: 'c_images',   type: 'string'}
        ]
    }
});