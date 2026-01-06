const fetchCategoryRepository = require("../../repositories/categories.repository/fetchCategory");

const fetchCategoriesService = async () => {
  const categories = await fetchCategoryRepository();
  return categories;
};

module.exports = fetchCategoriesService;
