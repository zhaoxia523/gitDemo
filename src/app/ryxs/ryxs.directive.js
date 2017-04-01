/**
 * Created by hzjs-pc on 2017/3/30.
 */
'use strict';
angular.module('app')
    .directive('showActiveColor', ['$timeout',function ($timeout) {
        return {
            restrict: "AE",
            //scope:{},
            link: function (scope, ele, attr) {
                $timeout(function () {
                    if (ele.text() != '0') {
                        ele.css('background', 'rgb(80,172,225)');
                    }
                },50);

            }
        }
    }]);
