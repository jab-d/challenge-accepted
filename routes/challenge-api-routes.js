
// Dependencies
var db = require("../models");

module.exports = function (app) {

//=====================================================================================//
// GET ROUTE FOR GETTING ALL CHALLENGES
//=====================================================================================//

  app.get("/api/challenges", function (req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userId = req.query.user_id;
    }
    db.Challenge.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbChallenge) {
      res.json(dbChallenge);
    });
  });
//=====================================================================================//
// POST ROUTE FOR SAVING NEW CHALLENGE
//=====================================================================================//

  app.post("/api/challenges", function (req, res) {
    console.log(req.body)
    db.Challenge.create(req.body).then(function (dbChallenge) {
      res.json(dbChallenge);
    });
  });
};
