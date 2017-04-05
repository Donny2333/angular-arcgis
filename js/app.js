/**
 * Created by Donny on 17/3/29.
 */
(function (angular) {
    "use strict";

    angular.module("esri-app", ["esri.map"])
        .controller("AppController", ["esriLoader", "$scope", function (esriLoader, $scope) {
            var url = "http://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer";
            var vm = $scope.vm = {
                options: {
                    zoom: 4
                }
            };

            esriLoader.require(["esri/Map", "esri/layers/MapImageLayer", "esri/layers/TileLayer"]).then(function (modules) {
                var Map = modules[0];
                var MapImageLayer = modules[1];
                var TileLayer = modules[2];

                var layer = new TileLayer({
                    url: url
                });

                vm.map = new Map({
                    layers: [layer]
                });
            })
        }]);
})(angular);