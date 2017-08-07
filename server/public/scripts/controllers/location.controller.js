//LocationController

app.controller('LocationController', function(LocationService) {
    //attach controller to the view model
    console.log('in LocationController');
    var location = this;

    location.locationService = LocationService;
    location.locationObject = LocationService.locationObject;
    location.locationService.getCurrentLocation();
});//end LocationController
