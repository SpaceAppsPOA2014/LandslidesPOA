angular.module('landslidesPOA.services').service('baseService', function($resource) {

  var BASE_URL = '/';

  var resources = {
    SaveReport: {url: 'report/save'}
  };

  var createResource = function(resourceName) {
    return $resource(BASE_URL + resources[resourceName].url, 
      resources[resourceName].params, {
      get: {method: 'GET', timeout: 50000},
      post: {method: 'POST', timeout: 50000}
    });
  };

  this.post = function(resourceName, args) {
    return createResource(resourceName).post(args).$promise;
  };

  this.get = function() {
    return createResource(resourceName).get(args).$promise;
  };

});

