// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: "q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "l87emsmx7u1syonz",
      password: "umv24vz2h488zlh6",
      database: "dwyc3uh1cfathw2f"
  });
};

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "menu_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("i see an error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;