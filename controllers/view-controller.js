// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================


// Each of the below routes just handles the HTML page that the user gets sent to.


router.get("/", function (req, res) {
  res.render('login');
});
router.get('/feed', renderFeed);

router.get("/new-challenge", function (req, res) {
  res.render('new-challenge');
});

router.get("/authors", function (req, res) {
  res.render('authors');
});


// helper for / and blog routes
function renderFeed(req, res) {
  db.Challenge.findAll({
    include: [db.User]
  }).then(function (data) {
    res.render('feed', { Challenge: data})
  });
}

module.exports = router;