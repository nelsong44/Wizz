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
  account.getRestrooms = function() {
    RestroomService.getRestrooms()
    .then(function(response) {
      console.log('all restrooms from db', response);
      account.allRestroomsDb = response;
    });//end then
  };

  //get all restrooms from API via LocationService
  // LocationService.getRestrooms()
  // .then(function(response) {
  //   console.log('all restrooms from API', response);
  //   account.allRestroomsApi = response;
  // });//end then

  //delete restroom on button click via RestroomService
  account.deleteRestroom = function(id) {
    RestroomService.deleteRestroom(id).then(function(response) {
      console.log('Delete success!!!!!');
      account.getRestrooms();
    });
  };

  account.getRestrooms(); 

});//end UserController
