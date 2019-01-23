
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
// const methodOverride = require("method-override");

const app = express();
hbs.registerPartials(__dirname + "/views/partials"); 
// how we serve css files w/in Express
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
// app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));

app.listen(4000, () => console.log("4000 server is running"));
