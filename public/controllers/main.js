angular.module('twc')
  .controller('MainCtrl', ['$rootScope','$scope', '$state',
    function ($rootScope, $scope, $state, memberData) {
      $scope.mapSrcUrl = 'http://dsx.weather.com/util/image/w/68a62f4e-122e-4c72-91b2-ec9f5024e031.jpg?v=at&w=320&h=180&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0'

      $state.go('main');


    }]);
