'use strict';

angular.module('eshApp')
.controller('CreateCtrl', function ($scope, $location, $http) {
    $scope.event = {};
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        markers: {},
        events: {click: mapClicked},
        zoom: 8
    };
    $scope.cancel=function(){
    	$location.path('/event');
    }

    $scope.submit=function(valid){
        if (valid) {
            console.log($scope.event);
            $http.post('/api/events/',  $scope.event);
        };
    }

    function mapClicked(maps, event, mEvent){
        console.log(mEvent);
        var marker = $scope.map.marker;
        if (marker) {
            marker.setMap(null);
        };
        
        $scope.map.marker = new google.maps.Marker({
          position: mEvent[0].latLng,
          map: maps,
          title: 'Hello World!'
      });
    }
});
