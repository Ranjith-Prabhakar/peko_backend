const express = require("express");
const tryCatchHandler = require("../utils/tryCatch");

const { fetchCategoriesController } = require("../controllers/categoriesController");

function categoryRoute() {
  const router = express.Router();

  router.get(
    "/categories",
    tryCatchHandler(fetchCategoriesController)
  );

  return router;
}

module.exports = categoryRoute;
