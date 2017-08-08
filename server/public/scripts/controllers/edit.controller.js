//EditController

app.controller('EditController', function($http) {
  console.log('in EditController');
  //attach controller to the view model
  var edit = this;

  edit.features = ['Unisex', 'Handicap Accessible', 'Changing Station'];

  edit.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];

  edit.input = [];
  edit.input.comments = [];

  edit.input.venue;
  edit.input.street;
  edit.input.city;
  edit.input.state;
  edit.input.zipcode;
  edit.input.rating;
  edit.input.unisex;
  edit.input.accessible;
  edit.input.changingTable;
  edit.input.comments.comment;

  //function to submit user input from form submission into database
  edit.submitUserInput = function() {
    console.log(edit.input);
  }//end submitUserInput
});//end EditController


// input.venue, input.street, input.city, input.rating, input.unisex, input.accessible, input.changingTable, input.comment
