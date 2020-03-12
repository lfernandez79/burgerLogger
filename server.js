var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql2");
var compression = require("compression")

var PORT = process.env.PORT || 8080;

var app = express();

// compress file
app.use(compression({filter: shouldCompress}))

function shouldCompress(req, res) {
    if (req.header["x-no-compression"]){
        return false
    }
    return compression.filter(req, res)
}
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});