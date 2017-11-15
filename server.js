// Dependencies
var express = require ('express');
var bodyParser = require ('body-parser');

var burgerController = require("./controllers/burger_controller.js");
var burger = require("./models/burger.js");


// Set up Express
var PORT = process.env.PORT || 3000;
var app = express();

// Static directory
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//Routes
app.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

app.use("/", burgerController);

// Start server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});