/**
 * Created by Donny on 17/3/29.
 */
(function (angular) {
    "use strict";

    angular.module("esri-app", ["esri.map"])
        .controller("AppController", ["Map", "MapImageLayer", "$scope", function (Map, MapImageLayer, $scope) {
            var vm = $scope.vm = {
                options: {
                    zoom: 4
                }
            };

            Map.create().then(function (result) {
                var layer = {};

                MapImageLayer.create().then(function (result) {
                    layer = new result.MapImageLayer({
                        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer"
                    });
                }).then(function () {
                    vm.map = new result.Map({
                        layers: [layer]
                    });
                })
            });
        }]);
})(angular);