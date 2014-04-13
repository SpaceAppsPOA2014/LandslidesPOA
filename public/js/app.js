'use strict';

angular.module('landslidesPOA.controllers', []);
angular.module('landslidesPOA.models', []);
angular.module('landslidesPOA.services', []);

angular.module('landslidesPOA',
    ['ngRoute',
     'landslidesPOA.controllers',
     'landslidesPOA.models',
     'landslidesPOA.services',
     'leaflet-directive',
     'geolocation',
     'ngResource',
      'angularFileUpload'
    ]).
config(function($routeProvider, $httpProvider, $sceDelegateProvider) {

  $routeProvider
    .when('/report', {
      templateUrl: 'partials/report.html',
      reloadOnSearch: false
    })
    .when('/info', {
      templateUrl: 'partials/info.html',
      reloadOnSearch: false
    });
    $routeProvider.otherwise({redirectTo: '/report'});
});

