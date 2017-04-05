/**
 * Created by hzjs-pc on 2017/4/5.
 */
'use strict';
angular.module('app')
    .controller('navCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.back();
        }
    }]);