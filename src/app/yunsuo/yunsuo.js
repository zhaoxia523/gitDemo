/**
 * Created by hzjs-pc on 2017/3/28.
 */
'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index.ys', {
                url: '/ys',
                templateUrl: 'app/yunsuo/yunsuo.html',
                controller: 'yunsuoCtrl'
            })
            .state('index.ys.synthesize',{
                url : '/synthesize',
                template: '综合'
            })
            .state('index.ys.person',{
                url : '/person',
                templateUrl: 'app/yunsuo/renyuan/renyuan.html',
                controller:'renyuanCtrl'
            })
            .state('index.ys.case',{
                url : '/case',
                template: '案件'
            })
            .state('index.ys.address',{
                url : '/address',
                template: '地址'
            })
            .state('index.ys.phone',{
                url : '/phone',
                template: '通讯'
            })
    });