/**
 * Created by hzjs-pc on 2017/3/31.
 */
'use strict';
angular.module('app')
    .service('yunsuoSer', ['$http','$q',function($http,$q){
        this.getYunsuoNav = function(){
            var d = $q.defer();
            $http.get('../server/yunsuoNav.json')
                .success(function(response){
                    d.resolve(response);
                })
                .error(function(error){
                    d.reject(error);
                });
            return d.promise;
        }
    }]);