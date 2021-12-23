const User = require('./User');
const Sub = require('./sub');

Sub.belongsTo(User, { 
  foreignKey: 'user_id'
})

User.hasMany(Sub, { 
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

module.exports = { User, Sub};
