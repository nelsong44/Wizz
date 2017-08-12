app.controller('UserController', function(UserService, RestroomService, LocationService) {
  console.log('UserController created');

  //link controller to view model
  var account = this;
  account.singleRestroom = {};
  //link to UserService
  account.userService = UserService;
  account.userObject = UserService.userObject;

  //link to RestroomService
  account.restroomService = RestroomService;
  account.restroomObject = RestroomService.restroomObject;

  //get all restrooms from db via RestroomService
  account.getRestrooms = function() {
    RestroomService.getRestrooms()
    .then(function(response) {
      console.log('all restrooms from db', response);
      account.allRestroomsDb = response;
    });//end then
  };//end getRestrooms

  //call getRestrooms on load of user homepage
  account.getRestrooms();

  //get all restrooms from API via LocationService
  // LocationService.getRestrooms()
  // .then(function(response) {
  //   console.log('all restrooms from API', response);
  //   account.allRestroomsApi = response;
  // });//end then

  //delete restroom on button click via RestroomService
  account.deleteRestroom = function(id) {
    RestroomService.deleteRestroom(id)
    .then(function(response) {
      console.log('Delete successful');
      account.getRestrooms();
    });//end then
  };//end deleteRestroom

  //edit restroom on button click via RestroomService
  account.editRestroom = function(restroom) {
    console.log('account.editRestroom called');
    var id = account.singleRestroom._id; //DONT CHANGE!!!
      RestroomService.editRestroom(restroom)
      .then(function(response) {
      console.log('Edit successful');
      account.getRestrooms();
    });//end then
  };//end editRestroom

});//end UserController
