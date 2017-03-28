/**
 * Created by hzjs-pc on 2017/3/28.
 */
'use strict';
angular.module('app')
    .controller('renyuanCtrl',['$scope','$http','$state', function ($scope,$http,$state) {
        $http.get('../server/record.json').success(function (data) {
            console.log(data);
            $scope.basicInfos = data.basicInfos;

            $scope.search = function () {
                $state.go("index.ys.renyuan");
            };
            //$scope.basicInfos.records = data.basicInfos.records;
        })
    }]);