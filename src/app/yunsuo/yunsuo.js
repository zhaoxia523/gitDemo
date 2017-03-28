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
                        templateUrl: 'app/yunsuo/renyuan/renyuan.html'
                    }
                }
            })
    });