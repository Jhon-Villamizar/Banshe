'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_state = sequelize.define('tbl_state', {
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER
  }, {});
  tbl_state.associate = function(models) {
    tbl_state.hasMany(models.tbl_city,{as: 'cities'});
    tbl_state.hasMany(model.tbl_client, {as: 'clients'});
    tbl_state.belongTo(models.tbl_country,{foreignKey: 'countryId', as: 'country'});
  };
  return tbl_state;
};