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


// STATIC ASSETS
// ==========================================

app.use(express.static('app/public'));


//  ROUTES
// ==========================================


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// LISTEN
// ==========================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
