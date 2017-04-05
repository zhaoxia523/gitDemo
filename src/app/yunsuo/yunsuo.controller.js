/**
 * Created by zhaoxia on 17/3/29.
 */
'use strict';
angular.module('app')
    .controller('yunsuoCtrl', ['$scope', '$http', '$state', 'yunsuoSer','renyuanSer', function ($scope, $http, $state, yunsuoSer,renyuanSer) {

        yunsuoSer.getYunsuoNav().then(function (data) {
            $scope.searchTypes = data;
        });

        $scope.inputContent = '';
        $scope.searchDetail = function () {
            $scope.$broadcast('inputCon',$scope.inputContent);
            renyuanSer.getRecordData($scope.inputContent).then(function (data) {
                $state.go('index.ys.person');
            });
        };


        $scope.seleIndex = '0';
        $scope.isSelected = function (index, name) {
            $scope.seleIndex = index;
            if ($scope.inputContent == '') {
                return false;
            }
            $state.go("index.ys." + name);
        };

        $scope.isActive = function (index) {
            if ($scope.seleIndex == index) {
                return true;
            } else {
                return false;
            }
        }
    }]);