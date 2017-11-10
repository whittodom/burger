var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(res) {
			callback(res);
		});
	},
	insert: function(cols, vals, callback) {
		orm.insert("burgers", cols, vals, function(res) {
			callback(res);
		});
	},
	update: function(colAndVals, condition,callback) {
		orm.update("burgers", colAndVals, condition, function(res) {
			callback(res);
		})
	}
};

module.exports = burger;