'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TicketMessage extends Model {
    static associate(models) {
      TicketMessage.belongsTo(models.Ticket, {
        foreignKey: 'ticketId',
        as: 'ticket',
      });

      TicketMessage.belongsTo(models.User, {
        foreignKey: 'senderId',
        as: 'sender',
      });
    }
  }

  TicketMessage.init(
    {
      ticketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      senderId: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      },

      senderRole: {
        type: DataTypes.ENUM('user', 'admin', 'system'),
        allowNull: false,
      },

      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'TicketMessage',
      tableName: 'ticket_messages',
      timestamps: true,
    }
  );

  return TicketMessage;
};
