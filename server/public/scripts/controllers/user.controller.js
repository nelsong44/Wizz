app.controller('UserController', function(UserService, RestroomService, LocationService) {
  console.log('UserController created');

  var account = this;
  //link to UserService
  account.userService = UserService;
  account.userObject = UserService.userObject;

  //link to RestroomService
  account.restroomService = RestroomService;
  account.restroomObject = RestroomService.restroomObject;

  //get all restrooms from db via RestroomService
  RestroomService.getRestrooms()
  .then(function(response) {
    console.log('all restrooms from db', response);
    account.allRestroomsDb = response;
  });//end then

  //get all restrooms from API via LocationService
  LocationService.getRestrooms()
  .then(function(response) {
    console.log('all restrooms from API', response);
    account.allRestroomsApi = response;
  });//end then

});//end UserController
