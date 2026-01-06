'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TicketStatusHistories', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      ticketId: { type: Sequelize.INTEGER, allowNull: false },
      oldStatus: { type: Sequelize.STRING, allowNull: false },
      newStatus: { type: Sequelize.STRING, allowNull: false },
      changedBy: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TicketStatusHistories');
  }
};
