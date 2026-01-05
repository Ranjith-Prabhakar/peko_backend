const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const rateLimitOptions = require("../config/rateLimit");
const corsOptions = require("../config/cors");

function appLevelMiddleWares(app) {
  app.use((req, res, next) => {
    console.log(req.url);
    next();
  });
  app.use(helmet());
  app.use(rateLimit(rateLimitOptions));
  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}

module.exports = appLevelMiddleWares;
