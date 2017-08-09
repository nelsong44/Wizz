//client-side restroom route

app.controller('RestroomController', function($http) {
  console.log('in RestroomController');
  //attach controller to the view model
  var restroom = this;

  //assigns
  restroom.newRestroom = {};
  restroom.features = ['Unisex', 'Handicap Accessible', 'Changing Station'];
  restroom.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];

  //retrieve all restrooms stored in db on page load
  getRestrooms();

 //CRUD ROUTES --------->
    //request to add a new Restroom to the db
    restroom.addRestroom = function() {
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
    };//end addRestroom

    //function to get all restrooms from db
    function getRestrooms() {
      console.log('getRestrooms called');
      $http.get('/restroom')
      .then(function(response) {
        console.log(response.data);
      });//end get
    };//end getRestrooms
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
    restroom.newRestroom.latitude;
    restroom.newRestroom.longitude;
    //function to get coordinates of each address submitted via form using Google Maps
    function getLatLong() {
      console.log('getLatLong called');
      var geo = new google.maps.Geocoder;
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
    };//end getLatLong

});//end RestroomController
