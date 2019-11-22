'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_city = sequelize.define('tbl_city', {
    name: DataTypes.STRING,
    stateId: DataTypes.INTEGER
  }, {});
  tbl_city.associate = function(models) {
    // tbl_city.belongsTo(models.tbl_city);
  };
  return tbl_city;
};