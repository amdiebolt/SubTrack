const User = require('./User');
const Sub = require('./sub');

Sub.belongsTo(User, { 
  foreignKey: 'subbed_id'
})

User.hasMany(Sub, { 
  foreignKey: 'subbed_id',
  onDelete: 'CASCADE',
})



module.exports = { User, Sub};
