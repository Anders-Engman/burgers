// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// process.env.JAWSDB_URL lets us plug in your connection details with just one object property. Since the JawsDB provision, Heroku saved the connection info in an environmental variable.
if (process.env.JAWSDB_URL) {
  // If the server contains the JAWSDB_URL environmental variable, it connects to the JawsDB database.
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // If the server lacks the variable, it falls back on an explicitly defined local database.
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("Connection Error: " + err.stack);
    return;
  }
  console.log("Connection Established as ID " + connection.threadId);
});

module.exports = connection;
