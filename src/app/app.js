/**
 * Created by hzjs-pc on 2017/3/21.
 */
'use strict';
angular.module('app', ['ui.router','ngSanitize'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/index');
    });
