/**
 * Created by Donny on 17/3/29.
 */
(function (angular) {
    'use strict';

    angular.module('esri-app')
        .service('MapView', ["$q", "esriLoader", function ($q, esriLoader) {
            return {
                create: function () {
                    var deferred = $q.defer();

                    esriLoader.require('esri/views/MapView').then(function (MapView) {
                        deferred.resolve({
                            MapView: MapView
                        });
                    }, function (err) {
                        deferred.reject(err);
                    });

                    return deferred.promise;
                }
            }

        }]);
})(angular);