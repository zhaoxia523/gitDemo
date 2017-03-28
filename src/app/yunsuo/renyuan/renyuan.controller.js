/**
 * Created by hzjs-pc on 2017/3/28.
 */
'use strict';
angular.module('app')
.controller('ysCtrl',['$scope','$http', function ($scope,$http) {
        $http.get('../server/record.json').success(function (data) {
            console.log(data);
            $scope.basicInfos = data.basicInfos;
            //$scope.basicInfos.records = data.basicInfos.records;
        })
    }]);