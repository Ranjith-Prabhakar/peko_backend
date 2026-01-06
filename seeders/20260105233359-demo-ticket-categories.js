'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TicketCategories', [
      { name: 'Technical', description: 'Technical issues', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Billing', description: 'Billing related questions', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Account', description: 'Account management issues', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Payment', description: 'Payment and transactions', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Feature Request', description: 'Request for new features', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bug Report', description: 'Report bugs or glitches', createdAt: new Date(), updatedAt: new Date() },
      { name: 'General Inquiry', description: 'General questions', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Other', description: 'Miscellaneous', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TicketCategories', null, {});
  }
};
