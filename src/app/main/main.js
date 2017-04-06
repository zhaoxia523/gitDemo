/**
 * Created by hzjs-pc on 2017/3/24.
 */
'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'app/main/home/home.html',
                controller: function ($scope) {
                    $scope.title = '首页';
                }
            })
            .state('message', {
                url: '/message',
                templateUrl: 'app/main/message/message.html',
                controller: function ($scope) {
                    $scope.title = '消息';
                }
            })
            .state('perInformation', {
                url: '/perInformation',
                templateUrl: 'app/main/perInformation/perInformation.html',
                controller: function ($scope) {
                    $scope.title = '个人信息';
                }
            })
            .state('perSetting', {
                url: '/perSetting',
                templateUrl: 'app/main/perInformation/perInformation.html',
                controller: function ($scope) {
                    $scope.title = '个人设置';
                }
            })
    });
