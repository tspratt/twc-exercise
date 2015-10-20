'use strict';
angular.module('twc')
  .controller('Header', ['$scope', 'appData',
    function($scope, appData) {
      $scope.appTitle = 'TWC Exercise';
      $scope.headerClass = 'header';
      $scope.headerArea = 0;
      $scope.doSomething = function () {
        //console.log('DO SOMETHING');
        //$scope.headerClass = 'silly';
        appData.isSilly = ($scope.headerClass === 'silly');
      };
      $scope.recalcSize = function (element) {
        console.log('resize');
      };

}])
  .factory('sizeCalc',[function() {
    return {
      area: function(element) {
        return (element.clientWidth * element.clientHeight);
      }
    }
  }])
  .directive('header', ['$templateCache', '$window', '$timeout', 'sizeCalc', function($templateCache, $window, $timeout, sizeCalc) {
    return {
      restrict: 'E',
      replace: true,
      template: $templateCache.get('headerTmpl.html'),
      controller: 'Header',
      link: function(scope , element){
        scope.headerArea = sizeCalc.area(element[0]);
        element.bind("click", function(e){
          scope.headerArea = '';
          scope.$apply(function() {
            scope.headerClass = (scope.headerClass === 'header')? 'silly':'header';
            $timeout(function () {                          //need some time for the div resize to happen
              scope.headerArea = sizeCalc.area(element[0]);
            }, 200);
            scope.doSomething( );

          });
        });
        var w = angular.element($window);
        w.bind('resize', function() {
          scope.$apply( function() {
            scope.headerArea = sizeCalc.area(element[0]);
          });
        });
      }
    }
  }]);
