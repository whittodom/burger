var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//GET route
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

//POST route
router.post("/burgers/create", function(req, res) {
	burger.insert([
		req.body.burger_name
		],
		function(result) {
    		console.log("id: " + result.insertId);
            res.redirect("/");    		
		});
});

//PUT route
router.put("/burgers/update/:id", function(req, res) {

	burger.update(req.params.id,
	function(result) {
		if (result.changedRows == 0) {
	      return res.status(404).end();

		} else {
			res.status(200).end();
            res.redirect("/");    		
			
		}
	});
});

module.exports = router;