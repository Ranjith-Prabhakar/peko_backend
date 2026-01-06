const { fetchCategoriesService } = require("../../services/categories.services");

async function fetchCategoriesController(req, res) {
  const categories = await fetchCategoriesService();
  res.status(200).json({
    success: true,
    data: categories
  });
}

module.exports = fetchCategoriesController;
