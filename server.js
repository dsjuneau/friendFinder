// Server setup
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// For ease of parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
//Each route file contains the logic??

//Server itself
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
