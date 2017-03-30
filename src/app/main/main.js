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
                controller: function ($scope) {
                    $scope.title = "首页"
                }
            })

            .state('index.message', {
                url: '/message',
                template: '这是消息页'
            })
            .state('index.perInformation', {
                url: '/perInformation',
                template: '这是个人信息页'
            })
            .state('index.perSetting', {
                url: '/perSetting',
                template: '这是个人设置页'

            })
    });
