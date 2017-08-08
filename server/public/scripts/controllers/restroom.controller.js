//client-side restroom route

app.controller('RestroomController', function($http) {
  console.log('in RestroomController');
  //attach controller to the view model
  var restroom = this;

  //assigns
  restroom.newRestroom = {};
  restroom.features = ['Unisex', 'Handicap Accessible', 'Changing Station'];
  restroom.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];

  //retrieve all restrooms stored in db
  getRestrooms();

 //CRUD ROUTES
    //request to add a new Person to the db
    restroom.addRestroom = function() {
      adjustRating();
      console.log('addRestroom called');
      $http.post('/restroom', restroom.newRestroom)
      .then(function(response) {
        console.log('Added restroom ', response);
        getRestrooms();
      });//end then
    };//end addRestroom

    function getRestrooms() {
      console.log('getRestrooms called');
      $http.get('/restroom')
      .then(function(response) {
        console.log(response.data);
      });//end get
    };//end getRestrooms

    //function to adjust restroom rating based on user vote
    function adjustRating() {
      if(restroom.newRestroom.rating === 1) {
        restroom.newRestroom.rating += 1;
      } else if(restroom.newRestroom.rating === -1){
        restroom.newRestroom.rating -= 1;
      }// end if
      console.log('current rating: ', restroom.newRestroom.rating);
    }//end adjustRating

});//end RestroomController
