var express = require('express'),
	app = express(),
	mongoDb = require('mongodb').Db;

var SlideReportProvider = require('./lib/providers/slideReportProvider.js'),
    SlideReport = require('./lib/slideReport.js'),
    slideReports = SlideReportProvider.create(mongoDb);

app.use(express.static('./public'));

app.get('/save', function(req, res) {
  var geoLocation = {latitude:1000, longitude:2000},
  	  hazzardLevel = 2,
  	  images = ['anImage','otherImage'],
  	  created_at = new Date();

  slideReports.save(SlideReport.create(geoLocation, hazzardLevel, images, created_at));
  res.send('boa bonitão!');
});

app.listen(3000);



