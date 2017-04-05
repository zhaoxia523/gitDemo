/**
 * Created by hzjs-pc on 2017/3/29.
 */
'use strict';
angular.module('app')
    .controller('renyuanCtrl', ['$scope','$state', 'renyuanSer', function ($scope,$state, renyuanSer) {

        
        $scope.$on('inputCon', function (e,d) {
            $scope.content = d;
        });
        renyuanSer.getRecordData($scope.content).then(function (data) {
            $scope.resultCount = data.resultCount;
            $scope.time = data.time;
            $scope.basicInfos = data.basicInfos;
        });

    }]);