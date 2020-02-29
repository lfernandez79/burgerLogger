var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "",
    database: "burgers_db"
});

// Start Connection
connection.connect(function (err) {
    if (err) {
        console.error("ERROR connecting" + err.stack);
        return;
    }
console.log("Connected as id " + connection.threadId);
});

module.exports = connection;