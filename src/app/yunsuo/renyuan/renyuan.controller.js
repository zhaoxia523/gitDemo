/**
 * Created by hzjs-pc on 2017/3/29.
 */
'use strict';
angular.module('app')
    .controller('renyuanCtrl',['$scope','$http','$state', function ($scope,$http,$state) {
    $http.get('../server/record.json').success(function (data) {
        console.log(data);
        $scope.basicInfos = data.basicInfos;
        //$scope.basicInfos.records = data.basicInfos.records;

    });

    // $scope.searchDetail = function(){
    //     $state.go('index.ys.renyuan');
    // };
    $scope.goToryxs = function(){
        $state.go('index.ryxs');
    }
}]);