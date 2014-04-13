angular.module('landslidesPOA.models').factory('reportModel', function(reportService) {

  var report = {};
  var options = [
    {name: 'Rain', icon: 'icon_amarelo.jpg', id: 1},
    {name: 'Landslide', icon: 'icon_verde.jpg', id: 2},
    {name: 'Run', icon: 'icon_vermelho.jpg', id: 3},
  ];

  var saveReport = function() {
    reportService.saveReport({hola: 'hola'});
  };

  var selectOption = function(option) {
    report.option = option;
  };

  return {
    report: report,
    options: options,
    saveReport: saveReport,
    selectOption: selectOption
  };
});


