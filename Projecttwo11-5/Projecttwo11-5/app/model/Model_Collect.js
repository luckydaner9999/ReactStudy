/**
 * Created by lzhan on 16/10/11.
 */
Ext.define('private_cooker.model.Model_Collect', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'cname',  type: 'string'},
            {name: '_level',   type: 'string'},
            {name: '_order',   type: 'string'},
            {name: 'cooker_image',   type: 'string'},
            {name: 'cooker_icon',   type: 'string'},
            {name: 'profession',   type: 'string'},
            {name: 'cid',   type: 'int'},
        ]
    }
});