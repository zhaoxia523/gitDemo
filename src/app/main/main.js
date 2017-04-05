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
            })

            .state('message', {
                url: '/message',
                templateUrl: 'app/main/message/message.html',
            })
            .state('perInformation', {
                url: '/perInformation',
                templateUrl: 'app/main/perInformation/perInformation.html'
            })
            .state('perSetting', {
                url: '/perSetting',
                templateUrl: 'app/main/perInformation/perInformation.html'

            })
    });
