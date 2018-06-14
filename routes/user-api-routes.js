
// Dependencies
var db = require("../models");

module.exports = function(app) {

//=====================================================================================//
// GET ROUTE FOR GETTING ALL USERS
//=====================================================================================//

  app.get('/api/users', function(req, res){
    db.User.findAll({
      include: [db.Challenge]
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });

//=====================================================================================//
// POST ROUTE FOR SAVING NEW USERS
//=====================================================================================//

  app.post("/user/create", function(req, res) {
    console.log("User Data:")
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      bio: req.body.bio,
      points_earned: 0
    }).then(function (userDB){
      res.json(userDB)
    })
  });

//=====================================================================================//
// GET ROUTE FOR GETTING ONE SPECIFIC USER
//=====================================================================================//

  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Challenge]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
