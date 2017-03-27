/**
 * Created by hzjs-pc on 2017/3/22.
 */
'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index.ys.ryxs', {
                url: '/ryxs',
                views: {
                    'main@index': {
                        templateUrl: 'app/home/yunsou/ryxs/ryxs.html'
                    }
                }

            });
    });