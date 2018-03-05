var http = require("http");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");



//  SET UP EXPRESS
// ==========================================

var app = express();
var PORT = process.env.PORT || 8080;

//  DATA PARSING
// ==========================================

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


//  ROUTES
// ==========================================


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// LISTEN
// ==========================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
