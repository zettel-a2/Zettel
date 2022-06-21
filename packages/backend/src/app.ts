/* eslint-disable @typescript-eslint/no-explicit-any */
const environment = process.env.U_DB_ENVIRONMENT || "development";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexConfig = require("./config/knexfile")[environment];
// eslint-disable-next-line @typescript-eslint/no-var-requires
const knex = require("knex")(knexConfig);
export { knex };

// const createError = require('http-errors');
import express from "express";
const app = express();
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import favicon from "serve-favicon";
import flash from "connect-flash";

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.raw({ limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
// できるだけlimitを大きくしておく

export const UpImgDirBase = path.join(__dirname, "public/images/");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(flash());
// faviconの設定
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// ルーティング設定


// const usersRouter = require('./routes/alpha/users');
// const createRouter = require('./routes/alpha/create');
// const TestRouter = require('./routes/alpha/test');

// authorization
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("./config/passport")(app); // まだ
passport.initialize();
app.use(passport.session());





export default app;