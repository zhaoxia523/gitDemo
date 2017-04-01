/**
 * Created by zhaoxia on 17/3/29.
 */
'use strict';
angular.module('app')
    .controller('yunsuoCtrl',['$scope','$http','$state','yunsuoSer', function ($scope,$http,$state,yunsuoSer) {
        $scope.inputContent = '';
        $scope.searchDetail = function(){
            if($scope.inputContent == ''){
                return false;
            }else{
                $state.go('index.ys.person');
            }

        };

        // $scope.goToryxs = function(){
        //     $state.go('index.ryxs');
        // }

        $scope.showActive = function (index) {
            $scope.isActive = index;
        }

        yunsuoSer.getYunsuoNav().then(function (data) {
            $scope.searchTypes = data;
            console.log(data);
        });


        $scope.seleIndex = '0';
        $scope.isSelected = function (index,name) {
            $scope.seleIndex = index;
            $state.go("index.ys."+ name);
        };

        $scope.isActive = function (index) {
            if($scope.seleIndex == index){
                return true;
            }else{
                return false;
            }
        }
    }]);