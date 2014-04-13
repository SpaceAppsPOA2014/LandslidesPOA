var express = require('express'),
	app = express(),
	mongoDb = require('mongodb').Db;
  Server = require('mongodb').Server,
  multipart = require('connect-multiparty'),
  cloudinary = require('cloudinary');

var multipartMiddleware = multipart();

var SlideReportProvider = require('./lib/providers/slideReportProvider.js'),
    SlideReport = require('./lib/slideReport.js'),
    slideReports = SlideReportProvider.create(mongoDb, Server);

cloudinary.config({
  cloud_name: 'landslidepoa',
  api_key: '884447717328561',
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(express.static('./public'));

app.post('/upload', multipartMiddleware, function(req, res) {
  cloudinary.uploader.upload(req.files.file.path, function(result) {
    res.send({imageUrl: result.url});
  });
});

app.get('/save', function(req, res) {
  var geoLocation = {latitude:1000, longitude:2000},
  	  hazzardLevel = 2,
  	  images = ['anImage','otherImage'],
  	  created_at = new Date();

  slideReports.save(SlideReport.create(geoLocation, hazzardLevel, images, created_at));
  res.send('boa bonitão!');
});

app.listen(3000);



