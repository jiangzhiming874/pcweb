/**
 * Created by hxsd on 2016/11/25.
 */
myapp=angular.module("myapp").controller("oneCtrl",function($scope){
    $scope.data=[
        {img:"images/beijt.jpg"},
        {img:"images/wKgBp.jpeg"},
        {img:"images/huoche.jpg"},
        {img:"images/guang.jpg"},
        {img:"images/hai.jpg"}
    ];

    $scope.taya=[
        {img:"images/jdmd.jpg",name:"加德满都",cont:"加德满都（尼泊尔语：काठमाडौं,काठमान्डु,拉丁语：Kathmandu）位于加德满都谷地，" +
        "巴格马提河和比兴马提河的汇口处，是尼泊尔的首都，也是尼泊尔最大的城市。加德满都四周环山，北以喜马拉雅山为屏，南向印度洋暖流，" +
        "海拔约1370米，市区坐落于山间的加德满都谷地之中，气候宜人，年平均温度20℃左右，拥有杜巴广场、斯瓦扬布拉特、帕斯帕提那神庙等著名景点，" +
        "是世界闻名的旅游胜地，有“山中天堂”之美誉。"},
        {img:"images/houzi.jpg",name:"斯瓦扬布纳特寺",cont:"斯瓦扬布纳特寺是尼泊尔的佛教寺庙，亦称斯瓦扬布佛院，位于首都加德满都郊外斯瓦扬布山顶上。"},
        {img:"images/sm01.jpg",name:"契迪龙寺",cont:"契迪龙寺又叫大佛寺。是一个去清迈不可错过的必去之地。由于是寺庙，所以完全免费。进入寺庙前记得要拖鞋，不可以穿鞋进去。去厕所的话，要换拖鞋才可以进入，也是不能够穿鞋进入的。不论是裤子、还是裙子长度要过膝，也不能穿无袖衣服入内。与帕辛寺（WatPhraSingh）同为清迈地位最崇高的寺庙。寺中的佛塔也是古城最高的建筑物，从受损的 古塔可见它经历了许多历史，它是古城的 中心，也是清迈人精神核心的象征。"},
        {img:"images/sm02.jpg",name:"帕辛寺",cont:"这个寺院是清迈最大的寺院，也是参观的人最多的。帕辛寺（Wat Phra Singh）" +
        "与大佛寺同为清迈地位最崇高的寺庙。 该寺院由孟莱王初建于1345年，用于供奉其父亲的骨灰。不过这些大殿我看着都差不多啊。" +
        "最吸引的是寺院中的藏经阁，造型很别致，入口楼梯的扶手上，也有双龙的造型。墙壁上镶嵌着各色的宝石，还有下面的佛像浮雕，" +
        "保存的都相当完好"}

    ];
});