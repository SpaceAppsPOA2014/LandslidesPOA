var slideReport = require('../slideReport.js');

var createDB = function(host, port) {
	var database = new Db('landSlidesPoa', new Server(host, port, {auto_reconnect: true}, {}));
  	database.open(function(){});
  	return database;
};

var getCollection = function (database, callback) {
	database.collection('reports', function(error, collection) {
	    if( error ) callback(error);
	    else callback(null, collection);
	});
};

var save = function (database, report, callback) {
	getCollection(database, function (errors, collection) {
		collection.insert(report, callback);
	});
};

var create = function () {
	var database = createDB('localhost', 27017,{db:{safe:false}});
	return { 
		save: function(report, callback){ save(database, report, callback); }
	};
}

exports.create = create;