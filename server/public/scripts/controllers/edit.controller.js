//EditController

app.controller('EditController', function($http) {
  console.log('in EditController');
  //attach controller to the view model
  var edit = this;

  edit.features = ['Unisex', 'Handicap Accessible', 'Changing Station'];

  edit.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];

  //store user input from form submission in array
  edit.input = [];
  //store comments in their own array
  edit.input.comments = [];
  //user input storage for each piece of information captured
    edit.input.venue;
    edit.input.street;
    edit.input.city;
    edit.input.state;
    edit.input.zipcode;
    edit.input.rating = 0;
    edit.input.unisex = false;
    edit.input.accessible = false;
    edit.input.changingTable = false;
    edit.input.comments.comment;

  //function to submit user input from form submission into database
  edit.submitUserInput = function() {
    console.log(edit.input);
  }//end submitUserInput

  //function to check if checkboxes from form are checked upon submission
  edit.toggleCheckboxStatus = function(feature) {
    console.log(feature);
  };//end toggleSelection

});//end EditController


// input.venue, input.street, input.city, input.rating, input.unisex, input.accessible, input.changingTable, input.comment
