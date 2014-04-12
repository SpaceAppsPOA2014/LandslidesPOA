angular.module('landslidesPOA.controllers').controller('ReportCtrl', function($scope, geolocation, reportModel) {

  geolocation.getLocation().then(function(data) {
    $scope.center = {
      lat: data.coords.latitude,
      lng: data.coords.longitude,
      zoom: 12
   };
  });

  $scope.reportModel = reportModel;

  $scope.center = {
    lat: -12.05942,
    lng: -51.17052,
    zoom: 5
  };

  $scope.defaults = {
    scrollWheelZoom: false
  };

  $scope.saveReport = function() {
    reportModel.saveReport();
  };

  $scope.selectOption = function(option) {
    reportModel.selectOption(option);
  };

});

