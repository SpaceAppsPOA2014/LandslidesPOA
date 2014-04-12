angular.module('landslidesPOA.services').service('reportService', function(baseService) {

  this.saveReport = function(report) {
    baseService.post('SaveReport', report);
  };
});
