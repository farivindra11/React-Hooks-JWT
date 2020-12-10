var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var pg = require("pg");
var jwt = require("jsonwebtoken");
var cors = require("cors");
var app = express();

// ====== Setup local =======
var config = require("./config");
var user = require("./models/user");

var indexRouter = require("./routes/index");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

pg.connect(config.db);
app.set("secretKey", config.secret);

app.use("/", indexRouter);

module.exports = app;
