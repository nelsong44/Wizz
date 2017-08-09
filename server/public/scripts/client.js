//create instance of angular module for app
var app = angular.module('wizzApp', ['ngRoute']);

//traffic control for client-side routes
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc'
    })//end home
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })//end register
    .when('/location', {
      templateUrl: '/views/templates/location.html',
      controller : 'LocationController as location'
    })//end location
    .when('/restroom', {
      templateUrl: '/views/templates/restroom.html',
      controller : 'RestroomController as restroom',
    })//end location
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        //require authentication to access
        getuser : function(UserService){
          return UserService.getuser();
        }//end getuser
      }//end resolve
    })//end user
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        //require authentication to access
        getuser : function(UserService){
          return UserService.getuser();
        }//end getuser
      }//end resolve
    })//end info
    .otherwise({
      redirectTo: '/'
    });
});//end config
