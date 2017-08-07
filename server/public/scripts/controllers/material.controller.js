//Angular Material Controller

app.controller('MaterialController', function($mdDialog, $mdToast){
  console.log('MaterialController loaded.')
  var vm = this;

  // vm.showAlert = function(ev) {
  //   // Appending dialog to document.body to cover sidenav in docs app
  //   // Modal dialogs should fully cover application
  //   // to prevent interaction outside of dialog
  //   $mdDialog.show(
  //     $mdDialog.alert()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .clickOutsideToClose(true)
  //       .title('This is an alert title')
  //       .textContent('You can specify some description text in here.')
  //       .ariaLabel('Alert Dialog Demo')
  //       .ok('Got it!')
  //       .targetEvent(ev)
  //   );
  // };
  //
  // vm.openToast = function($event) {
  //   $mdToast.show($mdToast.simple().textContent('Hello!'));
    // Could also do $mdToast.showSimple('Hello');

});//end MaterialController
