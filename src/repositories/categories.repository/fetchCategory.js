const { TicketCategory } = require("../../../models");

const fetchCategory = async () => {
  return await TicketCategory.findAll({
    attributes: ['id', 'name'],
    order: [['name', 'ASC']]
  });
};

module.exports = fetchCategory;
