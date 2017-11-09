// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.log("ERROR: " + err);
    return;
  }
  console.log("CONNECTED: " + connection.threadId);
});

module.exports = connection;