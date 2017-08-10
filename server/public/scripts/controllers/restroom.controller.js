//client-side restroom route

app.controller('RestroomController', function(RestroomService) {
  console.log('in RestroomController');
  //attach controller to the view model
  var restroom = this;

  restroom.restroomService = RestroomService;
  restroom.restroomObject = RestroomService.restroomObject;
  restroom.restroomService.getRestrooms();

  //assigns
  restroom.newRestroom = {};
  restroom.features = ['Unisex', 'Handicap Accessible', 'Changing Station'];
  restroom.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];

});//end RestroomController

 
