var slideReport = require('../slideReport.js');

var createDB = function(mongoDb, Server, host, port) {
	var database = new mongoDb('landSlidesPoa', new Server(host, port, {auto_reconnect: true}, {}));
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

var list = function (database, callback) {
  getCollection(database, function (errors, collection) {
    collection.find(function (errors, reports) {
      reports.toArray(callback);
    });
  });
}

var create = function (mongoDB, Server) {
	var database = createDB(mongoDB, Server, 'localhost', 27017,{db:{safe:false}});
	return {
		save: function(report, callback){ save(database, report, callback); },
    list: function(callback){list(database,callback);}
	};
}

exports.create = create;