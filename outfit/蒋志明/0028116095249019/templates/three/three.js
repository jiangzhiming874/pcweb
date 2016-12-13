/**
 * Created by hxsd on 2016/11/25.
 */
myapp=angular.module("myapp").controller("threeCtrl",function($scope,$http) {
    $scope.diary = [
        {imageurl:"images/sm01.jpg",
        text:"契迪龙寺是我来清迈计划之一，去之前也看过不少关于它的信息。" +
            "原本此景计划在第二天，接近傍晚时，无聊之际在古城乱逛时与它不期而遇。真是百闻不如一见，从街道正门进入主殿，" +
            "当时只是被殿中传来的诵经声给吸引，并没发觉它就是契迪龙寺，只觉得它与众寺庙相比别具一格。主殿金碧辉煌，佛像贴满金箔，" +
            "古迹悠悠；后面则是充满历史感的黑石佛塔，大佛塔呈四方形，外形酷似埃及的金字塔，四面各有一座高耸的楼梯可爬上塔。" +
            "在幕色下，佛塔里的灯光折射下，更为显得古朴壮观，甚带有些许神秘之感。交通：它位于古城中心，如果住在古城内或周边，" +
            "可以看地图步行而至。如果住在较远的地方，可以坐TUTU车前往，40B之内。",
        zan:{number:"1002",btn:false},
        cai:{number:"126",btn:false}
        },
        {imageurl:"images/jdmd.jpg",
            text:"加德满都作为全国最大的城市(几乎是唯一的大城市)，加德满都也像其他发展中国家的城市一样，迫不及待地进入了高楼林立、" +
            "交通拥堵、汽车尾气污染严重的现代社会。而只有后街小巷那些到处充溢着万寿菊的寺庙、" +
            "堆满了干红辣椒和稻米的庭院以及从中世纪开始就几乎未曾改变的狭小的作坊，才能真正体现这座首都城市迷人的文化和艺术遗产。",
            zan:{number:"789",btn:false},
            cai:{number:"0",btn:false}
        },
        {imageurl:"images/houzi.jpg",
            text:"斯瓦扬布纳特寺在蓝天的映衬下，斯瓦扬布大佛塔越发有一种宁静而庄严的感觉。"+
            "斯瓦扬布纳达寺地势高，在孤立的小山包上，是俯瞰整个加德满都最好的地方了。下午傍晚，吹着徐徐微风欣赏美景感觉好惬意的。"+
            "但别名为猴庙的这里，猴子特别多，并且和中国各景点的猴子一样凶猛。就在上图的地方，本想好好帮老妈拍张美照，突然有一只猴子扑向老妈的背上要抢她手中的水壶，吓得老妈花容失色，照片都没来得及拍就赶紧躲开了。。。盆友们如果去的话一定要小心呐。。。",
            zan:{number:"599",btn:false},
            cai:{number:"56",btn:false}
        },
        {imageurl:"images/sm02.jpg",
            text:"帕辛寺在清迈地位最高、也是最大的一座寺庙，与 契迪龙寺 齐名。 帕辛寺位于主路 Ratchadamnern Rd 的最西端。" +
            "1345年由曼格莱王初建，后经多次扩建才形成了现有的规模。寺中存放着卡福国王的骨灰，镀金大殿建于兰纳时代，" +
            "内有精致的木雕，还绘有反映19世纪清迈人和寺庙日常生活的壁画，供奉着令人敬畏的镀金 Phra Singh 佛像，这是寺庙名称的由来。" +
            "在曼谷和洛坤也有同名的佛像，据说都是在斯里兰卡制作的，以及浮雕精美的手稿珍藏室。 寺院右侧角落坐落着拜莱殿，白色的墙壁与正面涂成金色的木头大门搭配协调。" +
            "殿内有描绘清迈地方旧时衣着和生活习惯的壁画，被誉为泰北传统艺术的代表作。寺内的图书馆内收藏了很多经典著作，墙壁上装饰着合掌行礼的漆器女神像。 大门口有两只白色的神兽。" +
            "寺内也是张灯结彩的，还有传统乐队在演奏。大殿内比较低调，以象牙白为主色调。",
            zan:{number:"522",btn:false},
            cai:{number:"12",btn:false}
        }

    ];
    $scope.jia=function(item){
        angular.forEach($scope.diary,function(obg){
            if(item==obg&&item.zan.btn==false){
                item.zan.number++;
                item.zan.btn=true;
            }

        });
    };
    $scope.jian=function(item){
        angular.forEach($scope.diary,function(obg) {
            if (item == obg && item.cai.btn == false) {
                item.cai.number++;
                item.cai.btn = true;
            }
        });
    };
    $scope.loadMore=function(){
        //向服务器请求数据
        $http.get("data.json")
            .success(function(data){
                //将还回的数据,追加到已有数据的后面
                Array.prototype.push.apply($scope.diary,data.datas);
            })
            .finally(function(){
                //通知框架,下拉刷新结束,让加载图标消失
                $scope.$broadcast("scroll.infiniteScrollComplete")
            });
    };


});