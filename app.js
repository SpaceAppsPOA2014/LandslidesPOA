var express = require('express'),
	app = express(),
	mongoDb = require('mongodb').Db;
  Server = require('mongodb').Server,
  multipart = require('connect-multiparty'),
  bodyParser = require('body-parser'),
  cloudinary = require('cloudinary');

app.use(bodyParser());

var multipartMiddleware = multipart();

var SlideReportProvider = require('./lib/providers/slideReportProvider.js'),
    SlideReport = require('./lib/slideReport.js'),
    slideReports = SlideReportProvider.create(mongoDb, Server);

cloudinary.config({
  cloud_name: 'landslidepoa',
  api_key: '884447717328561',
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.post('/upload', multipartMiddleware, function(req, res) {
  cloudinary.uploader.upload(req.files.file.path, function(result) {
    res.send({imageUrl: result.url});
  });
});

app.post('/report/save', function(req, res) {
  var geoLocation = {lat: req.body.center.lat, lng: req.body.center.lng, zoom: req.body.center.zoom},
      description = req.body.description,
  	  hazzardLevel = req.body.option,
  	  images = req.body.image,
  	  created_at = new Date();
  var slideReport = SlideReport.create(description, geoLocation, hazzardLevel, images, created_at);
  slideReports.save(slideReport, function (error) {
    res.send({status:200, report:slideReport});
  });
});

app.get('/reports', function(req, res) {
  slideReports.list(function(error, reports) {
    res.send(reports);
  });
});

app.use(express.static('./public'));

app.listen(3000);



