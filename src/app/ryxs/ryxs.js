/**
 * Created by hzjs-pc on 2017/3/28.
 */
'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index.ryxs', {
                url: '/ryxs',
                templateUrl: 'app/ryxs/ryxs.html'
            });
    });