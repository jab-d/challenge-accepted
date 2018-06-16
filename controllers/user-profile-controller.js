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


module.exports = router;