/**
 * Created by zhaoxia on 17/3/29.
 */
'use strict';
angular.module('app')
    .controller('yunsuoCtrl',['$scope','$http','$state', function ($scope,$http,$state) {
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
    }]);