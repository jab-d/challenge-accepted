
const db = require("../models");
const express = require('express');
const router = express.Router();



//=====================================================================================//
// GET ROUTE FOR GETTING ALL USERS
//=====================================================================================//

  router.get('/api/users', function(req, res){
    db.User.findAll({
      include: [
        db.Challenge,
      ]
    }).then(function(dbUser){
      console.log(dbUser)
      res.json(dbUser);
    });
  });

//=====================================================================================//
// GET ROUTE FOR GETTING ONE SPECIFIC USER
//=====================================================================================//

  router.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Challenge]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  module.exports = router;
