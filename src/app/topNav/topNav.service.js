/**
 * Created by hzjs-pc on 2017/3/30.
 */
'use strict';
angular.module('app')
.service('userSer', ['$http','$q',function($http,$q){
        this.getData = function(){
            var d = $q.defer();
            $http.get('../server/loginUser.json')
                .success(function(response){
                    d.resolve(response);
                })
                .error(function(error){
                    d.reject(error);
                });
            return d.promise;
        }
    }]);