angular.module('landslidesPOA.models').factory('reportModel', function(reportService) {

  var report = {};
  var options = [
    {name: 'Rain', icon: '', id: 1},
    {name: 'Landslide', icon: '', id: 2},
    {name: 'Run', icon: '', id: 3},
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


