/**
 * Created by hzjs-pc on 2017/3/29.
 */
'use strict';
angular.module('app')
    .controller('renyuanCtrl', ['$scope','$state', 'renyuanSer', function ($scope,$state, renyuanSer) {

        renyuanSer.getData().then(function (data) {
            $scope.resultCount = data.resultCount;
            $scope.time = data.time;
            $scope.basicInfos = data.basicInfos;
        });
        // $scope.goToryxs = function () {
        //     $state.go('index.ryxs',{id:$scope.basicInfo.ry_id});
        // }
    }]);