'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_country = sequelize.define('tbl_country', {
    name: DataTypes.STRING
  }, {});
  tbl_country.associate = function(models) {
    tbl_country.hasMany(models.tbl_state, {as: 'states'})
    tbl_country.hasMany(models.tbl_client, {as: 'clients'})
    
  };
  return tbl_country;
};