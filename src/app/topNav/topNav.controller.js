/**
 * Created by hzjs-pc on 2017/3/24.
 */
'use strict';
angular.module('app')
    .controller('mainCtrl', ['$scope','userSer', function ($scope,userSer) {
        $scope.isActive = true;
        userSer.getData().then(function (data) {
            $scope.user = data;
        })
    }]);