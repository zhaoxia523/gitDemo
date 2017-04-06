/**
 * Created by hzjs-pc on 2017/4/6.
 */
'use strict';
angular.module('app')
.directive('changeColor',[function(){
        return {
            restrict : 'AE',
            link : function(scope,ele,attr){
                ele.bind('click',function(){
                    $('body').css('background',ele.css('background'));
                })
            }

        }
    }]);