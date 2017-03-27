/**
 * Created by zhaoxia on 17/3/27.
 */
'use strict';
angular.module('app')
    .controller('ysCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('../server/record.json').success(function (data) {
            console.log(arguments);
            $scope.records = data.records;
        });
    }]);