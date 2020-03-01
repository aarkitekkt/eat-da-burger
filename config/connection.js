// Make connection to MYSQL database.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-04.cleardb.net",
    port: 3306,
    user: "b0c203f8a67070",
    password: "4f8063c3",
    database: "heroku_340aae31ae14980"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;