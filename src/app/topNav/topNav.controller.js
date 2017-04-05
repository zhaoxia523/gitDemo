/**
 * Created by hzjs-pc on 2017/3/24.
 */
'use strict';
angular.module('app')
    .controller('navTopCtrl', ['$scope','userSer', function ($scope,userSer) {
        userSer.getData().then(function (data) {
            $scope.user = data;
        })
    }]);