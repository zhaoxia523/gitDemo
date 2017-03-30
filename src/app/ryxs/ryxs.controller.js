/**
 * Created by hzjs-pc on 2017/3/30.
 */
'use strict';
angular.module('app')
    .controller('personCtrl', ['$scope', 'personSer', function ($scope, personSer) {

        personSer.getData().then(function (data) {
            //console.log(data);
            $scope.person = data.person;
            $scope.picInfos = data.person.picInfos;
            $scope.familyRelations = data.familyRelations;
            $scope.closeContacts = data.closeContacts;
            $scope.communicate = data.social_cue.communicate;
            $scope.internetMessage = data.social_cue.internetMessage;
            $scope.recentActTra = data.social_cue.recentActTra;
            $scope.contactAdress = data.social_cue.recentActTra.contactAdress;
            //console.log($scope.person.icon);
        });

    }]);