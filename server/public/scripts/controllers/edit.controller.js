//EditController

app.controller('EditController', function($http) {
  console.log('in EditController');
  //attach controller to the view model
  var edit = this;
  edit.features = ['Unisex', 'Handicap Accessible', 'Changing Station'];
  edit.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];
  edit.searchTerm;
  edit.clearSearchTerm = function() {
    edit.searchTerm = '';
  };

});//end EditController
