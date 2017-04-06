/**
 * Created by hzjs-pc on 2017/4/1.
 */
'use strict';
angular.module('app')
.directive('showMoreMark',['$timeout', function ($timeout) {
    return {
        restrict:'A',
        scope:{
            faIcon : '=',
            height:'@'
        },
        link:function(scope,ele,attr){
            $timeout(function () {
                scope.faIcon = false;
                var height = ele.innerHeight();
                scope.$watch('faIcon', function (newVal) {
                    if(newVal){
                        ele.height(height);
                        ele.parent().parent().css('background','linen');
                    }else{
                        ele.height(scope.height);
                        ele.css('overflow-y','hidden');
                        ele.parent().parent().css('background','white');
                    }
                })
            },50)

        }
    }
    }]);