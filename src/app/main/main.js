/**
 * Created by hzjs-pc on 2017/3/24.
 */
'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'app/main/main.html',
                controller: 'mainCtrl'
            })
            .state('index.ys', {
                url: '/ys',
                views: {
                    'main@index': {
                        templateUrl: 'app/yunsou/ys.html'
                    }
                }
            })
            .state('index.ys.ryxs', {
                url: '/ryxs',
                views: {
                    'main@index': {
                        templateUrl: 'app/ryxs/ryxs.html'
                    }
                }
            });
    });
