/**
 * Created by Donny on 17/3/29.
 */
(function (angular) {
    'use strict';

    angular.module('esri-app')
        .service('TileLayer', ["$q", "esriLoader", function ($q, esriLoader) {
            return {
                create: function () {
                    var deferred = $q.defer();

                    esriLoader.require('esri/layers/TileLayer').then(function (TileLayer) {
                        deferred.resolve({
                            TileLayer: TileLayer
                        });
                    }, function (err) {
                        deferred.reject(err);
                    });

                    return deferred.promise;
                }
            }

        }]);
})(angular);