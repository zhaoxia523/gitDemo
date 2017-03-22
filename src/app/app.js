/**
 * Created by hzjs-pc on 2017/3/21.
 */
'use strict';
angular.module('app',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index',{
                url : '/index',
                views : {
                    '' : {
                        templateUrl : 'app/main/main.html'
                    },
                    'topNav@index' : {
                        templateUrl : 'app/topNav/topNav.html'
                    },
                    'nav@index' : {
                       templateUrl : 'app/nav/nav.html'
                    }
                }
            })
    });
