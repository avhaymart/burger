// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "b28f19d13537a6",
  password: "694dbc1e",
  database: "heroku_40abc4b1b3910e3"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
