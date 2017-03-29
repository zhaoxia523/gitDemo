/**
 * Created by hzjs-pc on 2017/3/28.
 */
'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index.ys.renyuan.ryxs', {
                url: '/ryxs',
                views: {
                    'main@index': {
                        templateUrl: 'app/ryxs/ryxs.html'
                    }
                }
            });
    });