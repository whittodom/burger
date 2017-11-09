var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


//POST route
router.post("/", function(req, res) {
	burger.insert([
		"burger_name"
		], [
		req.body.burger_name
		],
		function(result) {
    		res.json({ id: result.insertId });
		});
});

//PUT route
router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition,
	function(result) {
		if (result.changedRows == 0) {
	      return res.status(404).end();

		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;