app.controller('UserController', function(UserService, RestroomService) {
  console.log('UserController created');
  var account = this;
  account.userService = UserService;
  account.userObject = UserService.userObject;

  account.restroomService = RestroomService;
  account.restroomObject = RestroomService.restroomObject;
  //get all restrooms from db through the RestroomService logic
  RestroomService.getRestrooms()
  .then(function(response) {
    console.log('all restrooms from db', response);
    account.allRestrooms = response;
  });//end then

});
