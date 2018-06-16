const db = require("../models");
const express = require('express');
const router = express.Router();

// Find all Authors and return them to the user with res.json
router.get("/api/user", function (req, res) {
  db.User.findAll({
    include: [db.Challenge]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});
router.get("/api/location", function (req, res) {
  db.User.findAll({
    include: [db.Challenge]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.get("/api/image", function (req, res) {
  db.User.findAll({
    include: [db.Challenge]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.get("/api/points", function (req, res) {
  db.User.findAll({
    include: [db.Challenge]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.get("/api/description", function (req, res) {
  db.User.findAll({
    include: [db.Challenge]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.post("/api/accomplished", function (req, res) {
  // Create an User with the data available to us in req.body
  console.log(req.body);
  db.User.create(req.body).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.post("/api/completed", function (req, res) {
  // Create an User with the data available to us in req.body
  console.log(req.body);
  db.User.create(req.body).then(function (dbUser) {
    res.json(dbUser);
  });
});

module.exports = router;