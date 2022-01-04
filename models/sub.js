const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const CronJob = require('cron').CronJob;


class Sub extends Model { }

Sub.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dayofmonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subbed_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    hooks: {
      afterCreate: async function (newSub) {
        await new CronJob(`15 14 ${newSub.dayofmonth} * *`, function () {
          const d = new Date();
          console.log('Every month your sub will renew:', d)
        })

        return newSub;
      },
    },

  
  sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Sub',
  },
);

console.log('new something')

module.exports = Sub;

// feature/subscription-countdown-renewal