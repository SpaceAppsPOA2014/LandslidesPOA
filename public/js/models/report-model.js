angular.module('landslidesPOA.models').factory('reportModel', function(reportService) {

  var report = {};
  var options = [
    {name: 'Rain', icon: 'icon_verde.jpg', id: 1, class:"green"},
    {name: 'Landslide', icon: 'icon_amarelo.jpg', id: 2, class:"yellow"},
    {name: 'Run', icon: 'icon_vermelho.jpg', id: 3, class:"red"},
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

  return {
    report: report,
    options: options,
    saveReport: saveReport,
    selectOption: selectOption,
    clear: clear
  };
});


