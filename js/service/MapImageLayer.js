/**
 * Created by Donny on 17/3/29.
 */
(function (angular) {
    'use strict';

    angular.module('esri-app')
        .service('MapImageLayer', ["$q", "esriLoader", function ($q, esriLoader) {
            return {
                create: function () {
                    var deferred = $q.defer();

                    esriLoader.require('esri/layers/MapImageLayer').then(function (MapImageLayer) {
                        deferred.resolve({
                            MapImageLayer: MapImageLayer
                        });
                    }, function (err) {
                        deferred.reject(err);
                    });

                    return deferred.promise;
                }
            }

        }]);
})(angular);