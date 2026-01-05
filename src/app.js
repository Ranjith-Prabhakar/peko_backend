const express = require("express");

const appLevelMiddleWares = require("./middlewares/appLevelMiddleWares");


const app = express();

appLevelMiddleWares(app);




module.exports = app;
