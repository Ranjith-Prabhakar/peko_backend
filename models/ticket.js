'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      Ticket.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Ticket.belongsTo(models.TicketCategory, { foreignKey: 'categoryId', as: 'category' });
      Ticket.hasMany(models.TicketMessage, { foreignKey: 'ticketId', as: 'messages' });
      Ticket.hasMany(models.TicketStatusHistory, { foreignKey: 'ticketId', as: 'statusHistory' });
    }
  }

  Ticket.init({
    userId: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    categoryId: { type: DataTypes.INTEGER, allowNull: false },
    priority: { type: DataTypes.ENUM('low','medium','high'), defaultValue: 'medium' },
    status: { type: DataTypes.ENUM('open','in_progress','resolved','closed'), defaultValue: 'open' }
  }, {
    sequelize,
    modelName: 'Ticket',
  });

  return Ticket;
};
