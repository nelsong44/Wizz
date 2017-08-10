//RestroomService
//logic for RestroomService

app.factory('RestroomService', function($http, $location){
  console.log('RestroomService Loaded');

  //globals
  var restroomObject = {};

  //declaring functions
  //CRUD ROUTES --------->
     //request to add a new Restroom to the db
     function addRestroom() {
       //get coordinates of restroom location based on user-inputted address to store in db
       getLatLong();
       //adjust restroom rating based on user input to store in db
       adjustRating();
       console.log('addRestroom called');
       $http.post('/restroom', restroom.newRestroom) //Restroom obj
       .then(function(response) {
         console.log('Added restroom ', response);
         getRestrooms(); //update after adding a new Restroom
       });//end then
     }//end addRestroom

     //function to get all restrooms from db
     function getRestrooms() {
       console.log('getRestrooms called from RS');
       return $http.get('/restroom')
       .then(function(response) {
         console.log(response.data);
         return response.data;
       });//end get
     }//end getRestrooms

     function deleteRestroom(id) {
       console.log(id);
       console.log('deleteRestroom called from RS');
       $http.delete('/restroom/' + id)
       .then(function(response){
        console.log('deleted', response);
        getRestrooms();
        //getRestrooms(username);
      });//end then
      }//end deleteRestroom

  //end CRUD ROUTES --------->

     //function to adjust restroom rating based on user rating
     function adjustRating() {
       if(restroom.newRestroom.rating === 1) {
         restroom.newRestroom.rating += 1;
       } else if(restroom.newRestroom.rating === -1){
         restroom.newRestroom.rating -= 1;
       }// end if
       console.log('current rating: ', restroom.newRestroom.rating);
     }//end adjustRating
     // restroom.newRestroom.latitude;
     // restroom.newRestroom.longitude;
     //function to get coordinates of each address submitted via form using Google Maps
     function getLatLong() {
       console.log('getLatLong called');
       var geo = new google.maps.Geocoder();
       var address = restroom.newRestroom.street + ' ' + restroom.newRestroom.city + ' ' + restroom.newRestroom.state + ' ' + restroom.newRestroom.zipcode;
       console.log(address);
       geo.geocode({'address':address}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
           restroom.newRestroom.latitude = results[0].geometry.location.lat();
           restroom.newRestroom.longitude = results[0].geometry.location.lng();
           console.log('lat: ', restroom.newRestroom.latitude, 'lng: ', restroom.newRestroom.longitude);
         } else {
           alert("Geocoder failed: " + status);
         }//end if
       });//end new geocode
     }//end getLatLong

  //make functions available to controller
  return {
    restroomObject : restroomObject,
    addRestroom : addRestroom,
    getRestrooms : getRestrooms,
    deleteRestroom : deleteRestroom
  };//end return object
  });//end LocationService
