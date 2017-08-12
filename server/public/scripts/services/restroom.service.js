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
     //request to add a new Restroom to the db on user form submission
     function addRestroom() {

       console.log('addRestroom called');
       console.log(newRestroom);
       //verify input fields are filled out, prompt to fill if not
       verifyInput();

      //  //post new restroom to the db
      //  $http.post('/restroom', newRestroom) //Restroom obj
      //  .then(function(response) {
      //    console.log('Added restroom ', response);
      //    //update display after adding a new Restroom
      //    getRestrooms();
      //  });//end then
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
      function editRestroom(restroomToEdit) {
        console.log('editRestroom called from RS');
        console.log(restroomToEdit);
        restroomToEdit.restroom = restroom;
        var id = restroomToEdit.restroom._id;
          function updateRestroom(id) {
            return $http.put('/restroom/' + id)
            .then(function(response){
             console.log('restroom edited', response);
             return response;
             //getRestrooms(username);
            });//end then
          }//end updateRestroom
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

     //function to verify input fields include data/ check if empty
     function verifyInput() {
       var empVenue = document.forms.addRestroom.venue.value;
       var empStreet = document.forms.addRestroom.street.value;
       var empCity = document.forms.addRestroom.city.value;
       var empState = document.forms.addRestroom.state.value;
       if (empVenue === "" || empStreet === "" || empCity === "" || empCity === "") {
         alert("Please fill out address information");
         return false;
       } else {
         //get coordinates of restroom location based on user-inputted address to store in db
         getLatLong();
         //adjust restroom rating based on user input to store in db
         adjustRating();
         //prompt to add another restroom or redirect to homepage after form is submitted
         addAnother();
         //post new restroom to the db
         $http.post('/restroom', newRestroom) //Restroom obj
         .then(function(response) {
           console.log('Added restroom ', response);
           //update display after adding a new Restroom
           getRestrooms();
         });//end then
        }//end if
         return true;
     }//end verifyInput

     //prompt to ask user if they'd like to add another restroom or return to homepage
     function addAnother() {
      var addAnotherRestroom = confirm("Would you like to add another restroom?");
      if (addAnotherRestroom === true) {
        alert("Go for it!");
        //clear input fields in form for new user input
        document.getElementById("addRestroom").reset();
        } else {
          alert("No Problem! Thanks for your contribution.");
          //redirect to Home if done adding restrooms
          $location.path( "/" );
        }//end if
      }//end addAnother

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
