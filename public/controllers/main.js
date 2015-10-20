'use strict';
angular.module('twc')
  .controller('MainCtrl', ['$rootScope','$scope', '$state', 'appData',
    function ($rootScope, $scope, $state, appData) {
      $scope.isSilly = false;
      $scope.$watch(
        function () {
          return appData.isSilly;
        },
        function (isSilly) {
          $scope.isSilly = isSilly;         //sets local scope to passed in changed object
        }
      );

      $state.go('main');


    }]);
