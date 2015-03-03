/**
 * Created by Zoya on 2/24/2015.
 */
define(['angular'], function (angular) {
    'use strict';

    return angular.module('app.scheduleApp.services', []).
        factory('scheduleAPIservice', function ($http) {
            var resultsAPI = {};

            resultsAPI.getAuthors = function () {
                return $http({
                    method: 'GET',
                    url: 'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=bharti,kapil[author]&retmode=json&callback=JSON_CALLBACK'
                });

            };
            return resultsAPI;

        });
});
