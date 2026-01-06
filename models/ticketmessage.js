'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TicketMessage extends Model {
    static associate(models) {
      TicketMessage.belongsTo(models.Ticket, { foreignKey: 'ticketId', as: 'ticket' });
      TicketMessage.belongsTo(models.User, { foreignKey: 'senderId', as: 'sender' });
    }
  }

  TicketMessage.init({
    ticketId: { type: DataTypes.INTEGER, allowNull: false },
    senderId: { type: DataTypes.INTEGER, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
  }, {
    sequelize,
    modelName: 'TicketMessage',
  });

  return TicketMessage;
};
