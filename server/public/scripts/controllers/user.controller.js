app.controller('UserController', function(UserService, RestroomService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.restroomService = RestroomService;
  vm.restroomObject = RestroomService.restroomObject;
  RestroomService.getRestrooms()
  .then(function(response) {
    console.log('Added restroom ', response);
    //update after adding a new Restroom
  });//end then

});
