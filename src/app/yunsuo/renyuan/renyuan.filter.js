/**
 * Created by hzjs-pc on 2017/4/5.
 */

'use strict';
angular.module('app')
    .filter("highlight", function($sce, $log){

    var fn = function(text, search){
        if (!search) {
            return $sce.trustAsHtml(text);
        }
        text = encodeURI(text);
        search = encodeURI(search);
        var regex = new RegExp(search, 'gi');
        var result = text.replace(regex, '<span class="highlightedText">$&</span>');
        result = decodeURI(result);
        return $sce.trustAsHtml(result);
    };

    return fn;
});