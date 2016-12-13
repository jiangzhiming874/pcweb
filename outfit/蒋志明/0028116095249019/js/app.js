/**
 * Created by hxsd on 2016/11/23.
 */

var myapp=angular.module("myapp",["ionic"]);

myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("trou",{
            url:"/trou",
            templateUrl:"templates/trou/trou.html"
        })
        .state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"templates/tabs/tabs.html"

        })
        .state("detail",{
            url:"/detail",
            templateUrl:"templates/detail/detail.html"

        })
        .state("tabs.one",{
            url:"/one",
            views:{"tabs-one":{templateUrl:"templates/one/one.html", controller:"oneCtrl"}}

        })
        .state("tabs.two",{
            url:"/two",
            views:{"tabs-two":{templateUrl:"templates/two/two.html",controller:"twoCtrl"}}
        })
        .state("tabs.three",{
            url:"/three",
            views:{"tabs-three":{templateUrl:"templates/three/three.html",controller:"threeCtrl"}}
        });

    $urlRouterProvider.otherwise("/trou");

});