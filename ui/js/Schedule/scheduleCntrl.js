define(['angular'], function (angular) {
    'use strict';
    return angular.module('app.scheduleApp.controllers', []).
        controller('resultsController', function ($scope, scheduleAPIservice) {
            $scope.items = [];
            $scope.publications = [];
            $scope.nameFilter = null;

            scheduleAPIservice.getAuthors().success(function (response) {
                $scope.items = response.esearchresult.idlist;
            });
        });

});
