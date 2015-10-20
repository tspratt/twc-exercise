/**
 * Created by Tracy on 10/20/2015.
 */
'use strict';
angular.module('twc')
  .factory('appData', [function () {
    var appData = {};
    appData.isSilly = false;
    return appData;
  }]);