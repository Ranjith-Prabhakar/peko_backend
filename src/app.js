const express = require("express");
const appLevelMiddleWares = require("./middlewares/appLevelMiddleWares");
const pageNotFound = require("./middlewares/pageNotFound.middleware");

const app = express();

appLevelMiddleWares(app);



app.use(pageNotFound);

module.exports = app;
