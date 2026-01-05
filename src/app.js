const express = require("express");
const appLevelMiddleWares = require("./middlewares/appLevelMiddleWares");
const pageNotFound = require("./middlewares/pageNotFound.middleware");
const globalErrorHandler = require("./middlewares/errorHandler");
const app = express();

appLevelMiddleWares(app);



app.use(pageNotFound);
app.use(globalErrorHandler);
module.exports = app;
