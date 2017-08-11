//client-side restroom route

app.controller('RestroomController', function(RestroomService) {
  console.log('in RestroomController');
  //attach controller to the view model
  var restroom = this;

  restroom.restroomService = RestroomService;
  restroom.restroomObject = RestroomService.restroomObject;
  //get/display all restrooms from db on load of user homepage via RestroomService
  RestroomService.getRestrooms();
  //linking to getRestrooms() in RestroomService
  restroom.getRestrooms = RestroomService.getRestrooms;
  //linking to addRestroom() in RestroomService to call on click of form 'Submit'
  restroom.addRestroom = RestroomService.addRestroom;
  //linking to storage obj for user input to push new Restroom to db
  restroom.newRestroom = RestroomService.newRestroom;
  //linking to editRestroom() in RestroomService to call on click of form 'Update'
  restroom.editRestroom = RestroomService.editRestroom;

  restroom.restroomToEdit = restroomToEdit.restroom;

  //assigns
  restroom.features = ['Unisex', 'Handicap Accessible', 'Changing Station'];
  restroom.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];

});//end RestroomController
