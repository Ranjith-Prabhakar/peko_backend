'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TicketStatusHistory extends Model {
    static associate(models) {
      TicketStatusHistory.belongsTo(models.Ticket, { foreignKey: 'ticketId', as: 'ticket' });
      TicketStatusHistory.belongsTo(models.User, { foreignKey: 'changedBy', as: 'user' });
    }
  }

  TicketStatusHistory.init({
    ticketId: { type: DataTypes.INTEGER, allowNull: false },
    oldStatus: { type: DataTypes.STRING, allowNull: false },
    newStatus: { type: DataTypes.STRING, allowNull: false },
    changedBy: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'TicketStatusHistory',
  });

  return TicketStatusHistory;
};
