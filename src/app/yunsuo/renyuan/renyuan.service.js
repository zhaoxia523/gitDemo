/**
 * Created by hzjs-pc on 2017/3/30.
 */
'use strict';
angular.module('app')
    .service('renyuanSer', ['$http','$q',function($http,$q){
        this.getRecordData = function(inputContent){
            var d = $q.defer();
            $http.get('../server/record.json?content=' + inputContent)
                .success(function(response){
                    d.resolve(response);
                })
                .error(function(error){
                    d.reject(error);
                });
            return d.promise;
        }
    }]);