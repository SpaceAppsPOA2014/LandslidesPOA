angular.module('landslidesPOA.models').factory('reportModel', function(reportService) {

  var report = {};
  report.center = {};
  var options = [
    {name: 'Rain', icon: 'icon_verde.png', id: 1, class: 'green'},
    {name: 'Landslide', icon: 'icon_amarelo.png', id: 2, class: 'yellow'},
    {name: 'Run', icon: 'icon_vermelho.png', id: 3, class: 'red'},
  ];

  var saveReport = function() {
    reportService.saveReport(report);
  };

  var selectOption = function(option) {
    report.option = option;
  };

  var clear = function() {
    report.option = undefined;
  };

  var setImage = function(image) {
    report.image = image;
  };

  var setCenter = function(coords, zoom) {
    report.center.lat = coords.latitude;
    report.center.lng = coords.longitude;
    report.center.zoom = zoom;
  };

  return {
    report: report,
    options: options,
    saveReport: saveReport,
    selectOption: selectOption,
    clear: clear,
    setImage: setImage,
    setCenter: setCenter
  };
});


