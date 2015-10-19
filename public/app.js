/**
 * Created by Tracy on 10/19/2015.
 */
angular.module('twc', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self'                                                   // Allow same origin resource loads.
    ]);
    $urlRouterProvider.otherwise('/log-in');
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
  })
  .run(function ($templateCache) {
    $templateCache.put('twc-ex', '<label>exercise element: </label><input type="date" />');
  });
