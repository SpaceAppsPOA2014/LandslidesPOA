angular.module('landslidesPOA.controllers').controller('ReportCtrl', function ($scope, geolocation, reportModel, $upload, $modal, $log) {

    geolocation.getLocation().then(function (data) {
      reportModel.setCenter(data.coords, 16);
      reportModel.setMarker();
    });

    $scope.events = {
      map: {
        enable: ['moveend', 'drag', 'click', 'mousemove'],
        logic: 'emit'
      }
    };

    $scope.$on('leafletDirectiveMap.moveend', function (event) {
      $scope.markers = {
        osloCenter: reportModel.report.center,
        markers: {
          osloMarker: {
            lat: reportModel.report.center.lat,
            lng: reportModel.report.center.lng,
            draggable: false,
            focus: true,
            message: "You are here",
            title: "Marker"
          }
        }
      };
    });

    $scope.center = {
      lat: -12.05942,
      lng: -51.17052,
      zoom: 5
    };
    $scope.defaults = {
      scrollWheelZoom: false
    };

    $scope.markers = {
      osloCenter: reportModel.report.center,
      markers: {
        osloMarker: {
          lat: $scope.center.lat,
          lng: $scope.center.lng,
          draggable: false,
          focus: true,
          message: "You are here",
          title: "Marker"
        }
      }
    };
    
    $scope.reportModel = reportModel;
    reportModel.fetchAll();
    $scope.saveReport = function () {
      var promise = reportModel.saveReport();
      promise.then(function () {
        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: ModalInstanceCtrl,
        });

        modalInstance.result.then(function () {
          $log.info('Modal clossed at: ' + new Date());
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      });
    };

    $scope.chooseFile = function () {
      $('#file-input-button').click(function () {
        $('#file-input').click();
      })
    };

    $scope.selectOption = function (option) {
      reportModel.selectOption(option);
    };

    $scope.cancel = function () {
      reportModel.clear();
    };

    $scope.onFileSelect = function ($files) {
      var i = 0;
      for (i = 0; i < $files.length; i++) {
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: '/upload',
          data: {myObj: 'help'},
          file: file
        }).progress(function (evt) {
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
        }).success(function (data, status, headers, config) {
          console.log(data);
          reportModel.setImage(data.imageUrl);
        });
      }
    };

    var ModalInstanceCtrl = function ($scope, $modalInstance) {

      $scope.ok = function () {
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    };

  }
)
;

