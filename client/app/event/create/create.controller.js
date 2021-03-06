'use strict';

angular.module('eshApp')
.controller('CreateCtrl', function ($scope, $location, $http) {
    $scope.event = {};
    $scope.map = {
        center: {
            latitude: 58.410807,
            longitude: 15.621373
        },
        events: {click: mapClicked},
        zoom: 9
    };
		$scope.cancel=function(){
    	$location.path('/event');
    }

    $scope.submit=function(valid){
        var marker = $scope.map.marker;
        if (valid) {
            console.log(marker);
            var latLng = marker.position;
            $scope.event.location = [latLng.k, latLng.B];
            $http.post('/api/events/', $scope.event).success(function(data, status) {	
        		$location.path('/event/show/'+data._id);
            });
        };
    }

    function mapClicked(maps, event, mEvent){
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
