//LocationService
//logic for LocationController

app.factory('LocationService', function($http, $location){
  console.log('LocationService Loaded');

  //globals
  var locationObject = {};
  var map;

  //declaring functions
  function getCurrentLocation() {
    console.log('LocationService -- getCurrentLocation');
    //function to get current location coordinates from Google Maps Geolocation API
    $http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBW20u0U1JXWVS_xMpp0V1JuSv-F5ObiyM')
    .then(function(response) {
      console.log('current location from Geolocation: ', response.data.location);
      var latitude = response.data.location.lat;
      var longitude = response.data.location.lng;
      location.displayCurrentLocation = response.data.location;
      //dynamically create map, passing in user's current location
      // initMap(latitude, longitude);
    });//end post
  }//end getCurrentLocation

  // Create new Map object and display in 'map' div
  function initMap(lat, lng) {
    console.log(lat); //current latitude
    console.log(lng); //current longitude
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      zoom: 8
    });//end new Map Object
  }//end initMap

  //function to get all MN restrooms using API
  function getRestrooms() {
    console.log('getRestrooms called from LS');
    //http://www.refugerestrooms.org:80/api/v1/restrooms.json?page=1&per_page=99&offset=0&ada=false&unisex=false - first 99 from API
    //http://www.refugerestrooms.org:80/api/v1/restrooms/search.json?query=MN -all MN restrooms from API
    return $http.get('http://www.refugerestrooms.org:80/api/v1/restrooms/search.json?query=MN')
    .then(function(response) { //array of restroom objects from API
      console.log('all restrooms: ', response.data);
      //assign restroom API data to var
      var restrooms = response.data;
      //loop through restrooms to access location coordinates to mark on map
      for (var i = 0; i < restrooms.length; i++) {
        //set latitude and longitude of restroom location to variables
        var lat = restrooms[i].latitude;
        var lng = restrooms[i].longitude;
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
      });//end marker
    }//end for loop
    return response.data;
  });//end get
}//end getRestrooms

        //event listener for restroom markers
      //   google.maps.event.addListener(marker, "click", function(event) {
      //     var latitude = event.latLng.lat();
      //     var longitude = event.latLng.lng();
      //     console.log( latitude + ', ' + longitude );
      //     radius = new google.maps.Circle({map: map,
      //       radius: 100,
      //       center: event.latLng,
      //     });//end new Circle
      //   // Center of map based on marker that is clicked
      //   map.panTo(new google.maps.LatLng(latitude,longitude));
      // }); //end marker listener

  //make functions available to controller
  return {
    locationObject : locationObject,
    getCurrentLocation : getCurrentLocation,
    initMap : initMap,
    getRestrooms : getRestrooms
  };//end return object
});//end LocationService
