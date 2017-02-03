angular.module('app').controller('homeCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.test = "HELLO WORLD";

  $scope.toDoObj = {
      action: '',
      inProcess: false,
      completed: false
  }

    // $scope.toDoArray = function() {
    //   return mainService.getData;
    // }
    // $scope.toDoArray();

    function getData() {
      $scope.toDoArray = mainService.getData;
      console.log($scope.toDoArray);
    }
    getData();

})//closing
