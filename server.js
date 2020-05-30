const express = require("express");
const exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controllers");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
    console.log("Application deployed at: https://eatdaburgerhomework.herokuapp.com/");
});
