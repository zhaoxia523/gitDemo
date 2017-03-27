/**
 * Created by hzjs-pc on 2017/3/24.
 */
'use strict';
angular.module('app')
    .controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('../server/loginUser.json').success(function (data) {
            //console.log(arguments);
            $scope.messgaeCount = data.messgaeCount;
            $scope.ryCount = data.ryCount;
            $scope.userName = data.userName;
        });
    }]);