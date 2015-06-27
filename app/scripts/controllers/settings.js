'use strict';

angular.module('angularPassportApp')
    .controller('SettingsCtrl', function ($scope, Auth, $location, $rootScope) {
        for (var i = 0; i < $rootScope.currentUser.clients.length; i++) {
            if ($rootScope.currentUser.clients[i].shortname === 'DRE') {
                $rootScope.currentUser.clients[i].token = $rootScope.currentUser.dreToken;
            }
            if ($rootScope.currentUser.clients[i].shortname === 'SMART on FHIR') {
                $rootScope.currentUser.clients[i].token = $rootScope.currentUser.smartToken;
            }
        }

        $scope.switchOn = function(client) {
            console.log("here "+client.shortname);
            Auth.connectFHIR($rootScope.currentUser, client.credentials.client_id);
        };

        $scope.switchOff = function() {
            Auth.revokeToken();
        };

        $scope.revokeToken = function() {
            Auth.revokeToken();
        }
    });
