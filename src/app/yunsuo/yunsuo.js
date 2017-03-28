/**
 * Created by hzjs-pc on 2017/3/28.
 */
'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index.ys', {
                url: '/ys',
                views: {
                    'main@index': {
                        templateUrl: 'app/yunsuo/yunsuo.html'
                    }
                }
            })
            .state('index.ys.renyuan',{
                url : '/renyuan',
                templateUrl: 'app/yunsuo/renyuan/renyuan.html',
                controller:'renyuanCtrl'
            })
    });