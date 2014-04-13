angular.module('landslidesPOA.services').service('reportService', function(baseService) {

  this.saveReport = function(report) {
    return baseService.post('SaveReport', report);
  };
  this.fetchReport = function() {
    return baseService.get('FetchReport');
  };
});
