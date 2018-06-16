const db = require("../models");
const express = require('express');
const router = express.Router();

// Find all Users and return them to the user with res.json
router.get("/api/user", function (req, res) {
  db.User.findAll({
    include: [db.Post]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.get("/api/name", function (req, res) {
  db.User.findAll({
    include: [db.Post]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.get("/api/points", function (req, res) {
  db.User.findAll({
    include: [db.Post]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

module.exports = router;