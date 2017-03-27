/**
 * Created by hzjs-pc on 2017/3/27.
 */


angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index.ys', {
                url: '/ys',
                views: {
                    'main@index': {
                        templateUrl: 'app/home/yunsou/ys.html'
                    }
                },
                // controller: "ysCtrl"

            })
    });

