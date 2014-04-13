angular.module('landslidesPOA.controllers').controller('ReportCtrl', function($scope, geolocation, reportModel, $upload) {

  geolocation.getLocation().then(function(data) {
    reportModel.setCenter(data.coords, 16);
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

  $scope.chooseFile= function() {
    $('#file-input-button').click(function(){$('#file-input').click();})
  };

  $scope.selectOption = function(option) {
    reportModel.selectOption(option);
  };

  $scope.cancel = function() {
    reportModel.clear(); 
  };

  $scope.get = function() {
    return $http({
              url: '/get', 
              method: "GET"
           });
  };

  $scope.onFileSelect = function($files) {
    var i = 0;
    for (i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: '/upload',
        data: {myObj: 'help'},
        file: file
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        console.log(data);
        reportModel.setImage(data.imageUrl);
      });
    }
  };
});

