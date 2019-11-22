'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_seller = sequelize.define('tbl_seller', {
    name: DataTypes.STRING
  }, {});
  tbl_seller.associate = function(models) {
    tbl_seller.hasMany(models.tbl_visit, {as: 'sellers'});
  };
  return tbl_seller;
};