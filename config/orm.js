var connection = require("../config/connection.js");

var orm = {

	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM " + table + ";"
		var sql = connection.query(queryString, 
			function(err, result) {
				if (err) {
					throw err;
				}
				console.log(sql);
				callback(result);
			}
		).sql;
	},

	insert: function(table, cols, vals, callback) {
		var queryString = "INSERT INTO" + table + "(" + cols + ")" + "VALUES (" + vals + ");";
		var sql = connection.query(queryString, 
			function(err, result) {
				if (err) {
					throw err;
				}
				console.log(sql);
				callback(result);
			}
		).sql;
	},

	update: function(table, colAndVals, condition, callback) {
		var queryString = "UPDATE" + table + "SET" + colAndVals + "WHERE" + condition + ";"
		var sql = connection.query(queryString, 
			function(err, result) {
				if (err) {
					throw err;
				}				
				console.log(sql);
				callback(result);
			}
		).sql;
	}
};

module.exports = orm;

