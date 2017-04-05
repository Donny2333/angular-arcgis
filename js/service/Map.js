/**
 * Created by Donny on 17/3/29.
 */
(function (angular) {
    'use strict';

    angular.module('esri-app')
        .service('Map', ["$q", "esriLoader", function ($q, esriLoader) {
            return {
                create: function () {
                    var deferred = $q.defer();

                    esriLoader.require('esri/Map').then(function (Map) {
                        deferred.resolve({
                            Map: Map
                        });
                    }, function (err) {
                        deferred.reject(err);
                    });

                    return deferred.promise;
                }
            }

        }]);
})(angular);