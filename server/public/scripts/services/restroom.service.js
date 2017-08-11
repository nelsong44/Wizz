//RestroomService
//logic for RestroomController

app.factory('RestroomService', function($http, $location){
  console.log('RestroomService Loaded');

  //obj being exported to controller
  var restroomObject = {}; //obj being exported to controller
  //storage for user input to push new Restroom to db
  newRestroom = {};
  restroomToEdit = {};

  //CRUD ROUTES --------->
     //request to add a new Restroom to the db
     function addRestroom() {
       //get coordinates of restroom location based on user-inputted address to store in db
      //  getLatLong();
       //adjust restroom rating based on user input to store in db
       adjustRating();
       console.log('addRestroom called');
       console.log(newRestroom);
       $http.post('/restroom', newRestroom) //Restroom obj
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
         return response.data; //restrooms from db
       });//end get
     }//end getRestrooms

     function deleteRestroom(id) {
       console.log(id);
       console.log('deleteRestroom called from RS');
       return $http.delete('/restroom/' + id)
       .then(function(response){
        console.log('restroom deleted', response);
        return response;
        //getRestrooms(username);
      });//end then
      }//end deleteRestroom

      // function editRestroom(id) { //DONT CHANGE!!!!!
      function editRestroom(restroom) {
        console.log(restroom);
        restroomToEdit.restroom = restroom;
        console.log('editRestroom called from RS');
      //   return $http.put('/restroom/' + id)
      //   .then(function(response){
      //    console.log('restroom edited', response);
      //    return response;
      //    //getRestrooms(username);
      //  });//end then
     }//end editRestroom

  //end CRUD ROUTES --------->

     //function to adjust restroom rating based on user rating
     function adjustRating() {
       if(newRestroom.rating === 1) {
         newRestroom.rating += 1;
       } else if(newRestroom.rating === -1){
         newRestroom.rating -= 1;
       }// end if
       console.log('current rating: ', newRestroom.rating);
     }//end adjustRating

     //function to get coordinates of each address submitted via form using Google Maps
     function getLatLong() {
       console.log('getLatLong called');
       var geo = new google.maps.Geocoder();
       var address = newRestroom.street + ' ' + newRestroom.city + ' ' + newRestroom.state + ' ' + newRestroom.zipcode;
       console.log(address);
       geo.geocode({'address':address}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
           newRestroom.latitude = results[0].geometry.location.lat();
           newRestroom.longitude = results[0].geometry.location.lng();
           console.log('lat: ', newRestroom.latitude, 'lng: ', newRestroom.longitude);
         } else {
           alert("Geocoder failed: " + status);
         }//end if
       });//end new geocode
     }//end getLatLong

  //make functions available to controller
  return {
    restroomObject : restroomObject,
    newRestroom : newRestroom,
    addRestroom : addRestroom,
    editRestroom : editRestroom,
    deleteRestroom : deleteRestroom,
    getRestrooms : getRestrooms
  };//end return object
  });//end LocationService
