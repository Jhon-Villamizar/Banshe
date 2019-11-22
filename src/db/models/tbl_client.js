'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_client = sequelize.define('tbl_client', {
    nit: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    creditLimit: DataTypes.INTEGER,
    availableCredit: DataTypes.INTEGER,
    visitPercentage: DataTypes.INTEGER,
    description: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER
  }, {});
  tbl_client.associate = function(models) {
    Company.hasMany(models.tbl_visit, {as: 'visits'});
    Company.belongsTo(models.tbl_country, {foreignKey: 'countryId', as: 'contry'});
    Company.belongsTo(models.tbl_state, {foreignKey: 'stateId', as: 'state'});
    Company.belongsTo(models.tbl_client, {foreignKey: 'cityId', as: 'city'});
  };
  return tbl_client;
};