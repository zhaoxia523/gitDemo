/**
 * Created by zhaoxia on 17/3/29.
 */
'use strict';
angular.module('app')
    .controller('yunsuoCtrl',['$scope','$http','$state','yunsuoSer', function ($scope,$http,$state,yunsuoSer) {
        // $http.get('../server/record.json').success(function (data) {
        //     console.log(data);
        //     $scope.basicInfos = data.basicInfos;
        //     //$scope.basicInfos.records = data.basicInfos.records;
        //
        // });

        $scope.searchDetail = function(){
            $state.go('index.ys.renyuan');
        };
        // $scope.goToryxs = function(){
        //     $state.go('index.ryxs');
        // }

        $scope.showActive = function (index) {
            $scope.isActive = index;
        };

        yunsuoSer.getYunsuoNav().then(function (data) {
            $scope.searchTypes = data;
            console.log(data);
        })
    }]);