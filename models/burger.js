var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(res) {
			callback(res);
		});
	},
	insert: function(vals, callback) {
		orm.insert(vals, function(res) {
			callback(res);
		});
	},
	update: function(condition,callback) {
		orm.update(condition, function(res) {
			callback(res);
		})
	}
};

module.exports = burger;