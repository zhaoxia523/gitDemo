/**
 * Created by hzjs-pc on 2017/3/24.
 */
'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                views:{
                    '': {
                        templateUrl: 'app/main/main.html'
                    },
                    'main@index': {
                        templateUrl: 'app/home/home.html'
                    }
                }

            })
            .state('index.message', {
                url: '/message',
                views:{
                    //'': {
                    //    templateUrl: 'app/main/main.html'
                    //},
                    'main@index': {
                        template: '这是消息页'
                    }
                }
            })
            .state('index.perInformation',{
                url:'/perInformation',
                views:{
                    //'': {
                    //    templateUrl: 'app/main/main.html'
                    //},
                    'main@index': {
                        template: '这是个人信息页'
                    }
                }
            })
            .state('index.perSetting',{
                url:'/perSetting',
                views:{
                    //'': {
                    //    templateUrl: 'app/main/main.html'
                    //},
                    'main@index': {
                        template: '这是个人设置页'
                    }
                }

            })
    });
