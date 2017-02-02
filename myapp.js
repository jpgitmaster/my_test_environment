// Create a new module
var myapp = angular.module('myapp', []);


myapp.controller('ctrlJP', ['$scope', function($scope) {
  $scope.userdtls = [
    {'name': '', 'address': ''}
  ];

  $scope.submitForm = function(userdtl){
    console.log($scope.userdtls);
  }

  $scope.addNew = function(userdtl){
      $scope.userdtls.push({ 
          'name': "", 
          'address': ""
      });
  };

  $scope.removeDtl = function(userdtl){
    var index = $scope.userdtls.indexOf(userdtl);
    $scope.userdtls.splice(index, 1);
  }
}]);