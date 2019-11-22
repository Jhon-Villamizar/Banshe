'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_state = sequelize.define('tbl_state', {
    name: DataTypes.STRING,
    countryId:DataTypes.INTEGER
  }, {});
  tbl_state.associate = function(models) {
    tbl_state.hasMany(models.tbl_city,{
      foreignKey: 'stateId',
      as: 'cities'
    });
  };
  return tbl_state;
};