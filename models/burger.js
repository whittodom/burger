var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(res) {
			callback(res);
		});
	},
	insertOne: function(cols, vals, callback) {
		orm.insertOne("burgers", cols, vals, function(res) {
			callback(res);
		});
	},
	updateOne: function(colAndVals, condition,callback) {
		orm.updateOne("burgers", colAndVals, condition, function(res) {
			callback(res);
		})
	}
};

module.exports = burger;