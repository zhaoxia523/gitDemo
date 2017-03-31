/**
 * Created by hzjs-pc on 2017/3/30.
 */
'use strict';
angular.module('app')
    .service('personSer', ['$http', '$q', function ($http, $q) {
        this.getDetailData = function (params) {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: '../server/detail.json',
                params: params
            })
            .success(function (response) {
                    d.resolve(response);
                })
            .error(function (error) {
                    d.reject(error);
                });
            return d.promise;
        }
    }]);