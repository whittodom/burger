var connection = require("../config/connection.js");

var orm = {

	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM ??";
		var sql = connection.query(queryString, [table], 
			function(err, result) {
				console.log(sql);
				callback(err, result);
			}
		).sql;
	},

	insert: function(table, cols, vals, callback) {
		var queryString = "INSERT INTO ?? (??) VALUES (??)";
		var sql = connection.query(queryString, [table, cols, vals], 
			function(err, result) {
				console.log(sql);
				callback(err, result);
			}
		).sql;
	},

	update: function(table, colAndVals, condition, callback) {
		var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ??;"
		var sql = connection.query(queryString, [table, colAndVals, condition], 
			function(err, result) {
				console.log(sql);
				callback(err, result);
			}
		).sql;
	}
};

module.exports = orm;

