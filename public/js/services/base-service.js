angular.module('landslidesPOA.services').service('baseService', function($resource) {

  var BASE_URL = '/';

  var resources = {
    SaveReport: {url: 'report/save'},
	  FetchReport: {url: 'reports'}
  };

  var createResource = function(resourceName) {
    return $resource(BASE_URL + resources[resourceName].url, 
      resources[resourceName].params, {
      post: {method: 'POST', timeout: 50000},
      query: {method: 'GET', timeout: 50000, isArray:true},
    });
  };
  this.post = function(resourceName, args) {
    return createResource(resourceName).post(args).$promise;
  };

  this.get = function(resourceName, args) {
    return createResource(resourceName).query(args).$promise;
  };

});

