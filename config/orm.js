var connection = require("../config/connection.js");

var orm = {

	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM burgers"
		var sql = connection.query(queryString, [],  
			function(err, result) {
				if (err) {
					throw err;
				}
				console.log(sql);
				callback(result);
			}
		).sql;
	},

	insert: function(vals, callback) {
		var queryString = "INSERT INTO burgers (burger_name) VALUES (" + vals + ");";
		var sql = connection.query(queryString, [vals],  
			function(err, result) {
				if (err) {
					throw err;
				}
				console.log(sql);
				callback(result);
			}
		).sql;
	},

	update: function(condition, callback) {
		var queryString = "UPDATE burgers SET devoured = 1 WHERE id=" + condition + ";"
		var sql = connection.query(queryString, [condition], 
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

