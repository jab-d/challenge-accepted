// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var cloudinary = require("cloudinary-core");

var cl = new cloudinary.Cloudinary({cloud_name: "Jabd-Cloud", secure : true})
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./controllers/html-routes.js")(app);
require("./controllers/user-controllers.js")(app);
require("./controllers/challenge-controllers.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening @ http://localhost:" + PORT);
  });
});
