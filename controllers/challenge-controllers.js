
// Dependencies
var db = require("../models");

module.exports = function (app) {

  //=====================================================================================//
  // GET ROUTE FOR GETTING ALL CHALLENGES
  //=====================================================================================//

  app.get("/api/challenges", function (req, res) {
    db.Challenge.findAll({
      include: [
        db.User
      ]
    }).then(function (dbChallenge) {
      res.json(dbChallenge);
    });
  });

  //=====================================================================================//
  // GET ROUTE FOR FINDING ONE SPECIFIC CHALLENGE
  //=====================================================================================//
  app.get("/api/challenge/:id", function(req, res) {
    db.Challenge.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbChallenge) {
      res.json(dbChallenge);
    });
  });

  //=====================================================================================//
  // POST ROUTE FOR SAVING NEW CHALLENGE
  //=====================================================================================//

  app.post("/challenge/create", function (req, res) {
    console.log("request body: " + req.body)
    db.Challenge.create(req.body).then(function (dbChallenge) {
      res.json(dbChallenge);
      console.log(dbChallenge)
    });
  });

  //=====================================================================================//
  // STILL WORKING ON THIS --- PUT ROUTE TO UPDATE CHALLENGE STATUS
  //=====================================================================================//

    app.post("/challenge/action", function(req, res) {
      db.AcceptComplete.create(req.body).then(function(dbChallenge) {
        res.json(dbChallenge);
      });
    });

    // app.delete("/challenge/:id", function (req, res) {
    //   db.AcceptComplete.destroy({
    //     chId: req.body.chId,
    //     user: ,
    //     })
    //   .then(function (dbChallenge) {
    //     res.json(dbChallenge);
    //   });   
    // });
}; // END MODULE.EXPORT OF FUNCTION


