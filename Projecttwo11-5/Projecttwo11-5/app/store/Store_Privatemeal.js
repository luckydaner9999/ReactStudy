/**
 * Created by Administrator on 2016/10/23.
 */
Ext.define('private_cooker.store.Store_Privatemeal',{
    extend:'Ext.data.Store',
    requires:[
        'private_cooker.model.Model_Privatemeal'
        // 'private_cooker.util.Tools'
    ],
    config:{
        model:'private_cooker.model.Model_Privatemeal',
        data : [
            {menuname:'春 花 秋 月',
             menuprice:'1288',
             menubigimg:'resources/images/private_meal1.png',
             menukind: [
                 {colddish:'凉菜',menulist:[{dishes:'玫瑰豉油鸡'},{dishes:'江南手剥笋'}]},
                 {colddish:'热菜', menulist:[{dishes:'白灼芥兰苗'},{dishes:'黄金獐子岛扇贝'},
                      {dishes:'桃仁爆安格斯牛肉'},{dishes:'清蒸多宝鱼'},{dishes:'油焖大虾'}]},
                 {colddish:'汤羹',menulist:[{dishes:'酸汤海鲜乌龟蛋羹'}]},
                 {colddish:'主食', menulist:[{dishes:'五谷丰登'}]}
                 ],
             menudishimg:[
                 {img:'resources/images/private1_dish1.png'},
                 {img:'resources/images/private1_dish2.png'},
                 {img:'resources/images/private1_dish3.png'},
                 {img:'resources/images/private1_dish4.png'},
                 {img:'resources/images/private1_dish5.png'},
                 {img:'resources/images/private1_dish6.png'},
                 {img:'resources/images/private1_dish7.png'},
                 {img:'resources/images/private1_dish8.png'},
                 {img:'resources/images/private1_dish9.png'}
             ]
            },
            {menuname:'春 诵 下 弦',
             menuprice:'3588',
             menubigimg:'resources/images/private_meal2.png',
             menukind: [
                 {colddish:'凉菜',menulist:[{dishes:'百里香捞汁素鲍'},{dishes:'大长今牛爽脷'},
                     {dishes:'骨酥舟山小黄鱼'},{dishes:'有机时蔬配芝士煎培汁'},{dishes:'帕尔马芝士黑椒鸭胸'}
                 ]},
                 {colddish:'热菜', menulist:[{dishes:'清蒸石斑鱼'},{dishes:'松茸上汤菠菜苗'},
                      {dishes3:'鸡枞菌配和牛粒'},{dishes:'京葱烧梅花参'},{dishes:'香草烤新西兰羊排'},
                      {dishes:'国色天香'},{dishes:'云南野菌炒爽肉'},{dishes:'XO酱爆西施舌'}
                      ]},
                 {colddish:'汤羹',menulist:[{dishes:'玉竹沙参老鸽汤'}]},
                 {colddish:'甜点', menulist:[{dishes:'抹茶酥'}]}
                 ],
             menudishimg:[
                 {img:'resources/images/private2_dish1.png'},
                 {img:'resources/images/private2_dish2.png'},
                 {img:'resources/images/private2_dish3.png'},
                 {img:'resources/images/private2_dish4.png'},
                 {img:'resources/images/private2_dish5.png'},
                 {img:'resources/images/private2_dish6.png'},
                 {img:'resources/images/private2_dish7.png'},
                 {img:'resources/images/private2_dish8.png'},
                 {img:'resources/images/private2_dish9.png'}
             ]
            },
            {menuname:'圣 郁 金 澜',
             menuprice:'5288',
             menubigimg:'resources/images/private_meal3.png',
             menukind: [
                 {colddish:'凉菜',menulist:[{dishes:'茶干配鸡汁脆笋'},{dishes:'上海糟卤醉蟹钳'},
                     {dishes:'葱香深海虾球'},{dishes:'大厨味付海藻'},{dishes:'爽口山药配山楂汁'},
                     {dishes:'哈密青瓜三文鱼配日式芝麻煎培汁'}
                 ]},
                 {colddish:'热菜', menulist:[{dishes:'XO酱爆鸵鸟肾'},{dishes:'禅光万丈'},
                      {dishes:'顺德鲍鱼炒鸡'},{dishes:'百花酿金钱扣'},{dishes:'清蒸笋壳鱼'},
                      {dishes:'泉水高山菜苗'},{dishes:'海皇一品豆腐'},{dishes:'XO酱爆西施舌'},
                      {dishes:'席前煎澳洲牛排配黑松露汁'}
                      ]},
                 {colddish:'汤羹',menulist:[{dishes:'长岛冲浪活辽参'}]},
                 {colddish:'甜点', menulist:[{dishes:'芝士蛋糕配鲜果酸奶'}]}
                 ],
             menudishimg:[
                 {img:'resources/images/private3_dish1.png'},
                 {img:'resources/images/private3_dish2.png'},
                 {img:'resources/images/private3_dish3.png'},
                 {img:'resources/images/private3_dish4.png'},
                 {img:'resources/images/private3_dish5.png'},
                 {img:'resources/images/private3_dish6.png'},
                 {img:'resources/images/private3_dish7.png'},
                 {img:'resources/images/private3_dish8.png'},
                 {img:'resources/images/private3_dish9.png'}
             ]
            },
            {menuname:'浮 郁 金 酒',
             menuprice:'2588',
             menubigimg:'resources/images/private_meal4.png',
             menukind: [
                 {colddish:'凉菜',menulist:[{dishes:'五彩云丝'},{dishes:'深海芝麻裙边'},
                     {dishes:'野生柳芽配鸡蛋干'},{dishes:'山椒炝百叶'},{dishes:'跳水牛肉展'}
                 ]},
                 {colddish:'热菜', menulist:[{dishes:'上汤鸡毛菜'},{dishes:'雪映红梅'},
                      {dishes:'生炒菜心远'},{dishes:'龙果玉兰爆虾球'},{dishes:'安徽臭鲑鱼'},
                      {dishes:'新疆大盘鸡'},{dishes:'黄飞鸿掌中宝'},{dishes:'虫草花凤鹅'},
                      {dishes:'宫廷肉沫杂粮包'}
                      ]},
                 {colddish:'汤羹',menulist:[{dishes:'养生菌皇汤'}]},
                 {colddish:'主食', menulist:[{dishes:'三鲜水饺'}]}
                 ],
             menudishimg:[
                 {img:'resources/images/private4_dish1.png'},
                 {img:'resources/images/private4_dish2.png'},
                 {img:'resources/images/private4_dish3.png'},
                 {img:'resources/images/private4_dish4.png'},
                 {img:'resources/images/private4_dish5.png'},
                 {img:'resources/images/private4_dish6.png'},
                 {img:'resources/images/private4_dish7.png'},
                 {img:'resources/images/private4_dish8.png'},
                 {img:'resources/images/private4_dish9.png'}
             ]
            }
        ]
    }

});