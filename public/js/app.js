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
     'ngResource'
    ]).
config(function($routeProvider, $httpProvider, $sceDelegateProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/report.html',
      reloadOnSearch: false
    });
    $routeProvider.otherwise({redirectTo: '/'});
});

