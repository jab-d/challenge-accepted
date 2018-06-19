
// Requiring our models
var db = require("../models");
var express = require('express');
var router = express.Router();

  //=====================================================================================//
  // GET ROUTE FOR GETTING ALL CHALLENGES
  //=====================================================================================//

  router.get("/api/challenges", function (req, res) {
    db.Challenge.findAll({
      include: [
        db.User
      ]
    }).then(function (dbChallenge) {
      res.json(dbChallenge);
      // res.render('feed', {Challenge: dbChallenge})
    });
  });

  //=====================================================================================//
  // GET ROUTE FOR FINDING ONE SPECIFIC CHALLENGE
  //=====================================================================================//
  router.get("/api/challenge/:id", function(req, res) {
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

  router.post("/challenge/create", function (req, res) {
    console.log("request body: " + JSON.stringify(req.body));
    db.Challenge.create(req.body).then(function (dbChallenge) {
      res.json(dbChallenge);
      console.log(dbChallenge)
    });
  });

  //=====================================================================================//
  // STILL WORKING ON THIS --- PUT ROUTE TO UPDATE CHALLENGE STATUS
  //=====================================================================================//

    router.post("/challenge/action", function(req, res) {
      db.AcceptComplete.create(req.body).then(function(dbChallenge) {
        res.json(dbChallenge);
      });
    });

    module.exports = router;

