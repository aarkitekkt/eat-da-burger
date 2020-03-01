// Make connection to MYSQL database.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-04.cleardb.net",
    port: 3306,
    user: "b45871738184a0",
    password: "534bc0e0",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;