Ext.define('private_cooker.view.Cookers', {
    extend: 'Ext.Panel',
    xtype: 'cookers',
    requires: [
        'Ext.TitleBar',
        'Ext.data.JsonP'
    ],
    config: {
        id:'cookers_view',
        layout:'card',
        items: [
            {
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '厨师',
                        cls:'cooker_topbar',
                        items:[
                            {
                                xtype:'button',
                                iconCls:'back_cooker',
                                id:'back_mains',
                                align: 'left'
                            },

                            {
                                xtype:'button',
                                iconCls:'seach_cls',
                                id:'search_btn',
                                // html:'<img src="resources/images/search.png" class="cookers_search_img" alt="">',
                                align:'right'
                            }
                        ]

                    },
                    {
                        xtype:'panel',
                        cls:'cookers_sort_bgcolor',
                        items:[
                            {
                                xtype:'panel',
                                id:'3qq',
                                cls:'cooker_sort_container',
                                layout:
                                {
                                    type:'hbox'
                                },
                                items:[
                                    {
                                        flex:1,
                                        xtype:'panel',
                                        cls:'cookers_sort_ordernumber',
                                        items:{
                                            xtype:'button',
                                            // html:'<span style="color:#fff">预订次数</span>',
                                            html:'<span style="color:#646464">预订次数</span>',
                                            iconCls:'o_down_btn',
                                            iconAlign:'right',
                                            id:'arrange_o'
                                        }
                                    },
                                    {
                                        flex:1,
                                        xtype:'panel',
                                        items:{
                                            xtype:'button',
                                            // html:'<span style="color:#fff">综合排序</span>',
                                            html:'<span style="color:#646464">综合排序</span>',
                                            iconCls:'o_up_btn',
                                            iconAlign:'right',
                                            id:'comprehensive_ran'

                                        }
                                    }

                                ],
                            }
                        ]

                    },
                    {
                        xtype:'dataview',
                        scrollable:true,
                        plugins: [{
                            xclass:'Ext.plugin.ListPaging',
                            autoPaging:true,
                            noMoreRecordsText :  "没有更多数据了!",
                        }],
                        id:'cookers_container_panel',
                        height:'95%'
                    },
                    {
                        xtype:'panel',
                        height:'40px',
                        html:'<p style="text-align: center;line-height: 40px">没有更多数据</p>'
                    }
                       ]
            },
            {
              items:[
                  {
                      height:'50px',
                      // style:'background-color:#ff393d',
                      items:[{
                           xtype:'panel',
                           height:'40px',
                           // style:'border-bottom:solid 1px #ddd;padding-top:8px',
                           layout:'hbox',
                           items:[
                               {
                                   xtype:'button',
                                   style:'width:40px;height:40px;',
                                   iconCls:'seach_cls_gray'
                                   // html:'<div style="line-height: 40px"><img style="width:20px;height:20px" src="resources/images/sousuo.png" /></div>'
                               },
                               {
                                   flex:5,
                                   xtype: 'fieldset',
                                   cls:'search_dishes',
                                   // style:'border-bottom:solid 1px #ddd;padding-top:8px',
                                   items: [
                                       {
                                           xtype: 'searchfield',
                                           cls:'search_cooker_input',
                                           id:'s_field',
                                           lable:'query',
                                           name: 'query',
                                           placeHolder:'输入菜系或厨师姓名'
                                       }
                                   ]
                               },
                               {
                                   xtype:'button',
                                   cls:'cancel_btn',
                                   id:'cancel_btn',
                                   html:'<div style="color: black;text-align: right;line-height: 40px;padding-right: 5px">取消</div>'
                               }
                           ]
                       }]
                  },
                  {
                      xtype:'dataview',
                      scrollable:true,
                      id:'s_cookers_container_panel',
                      height:'95%'
                  }
              ]
          }
]





    }
});

