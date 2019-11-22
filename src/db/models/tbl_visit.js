'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_visit = sequelize.define('tbl_visit', {
    date: DataTypes.DATE,
    srId: DataTypes.INTEGER,
    net: DataTypes.INTEGER,
    visitTotal: DataTypes.INTEGER,
    description: DataTypes.STRING,
    clientId: DataTypes.INTEGER
  }, {});
  tbl_visit.associate = function(models) {
    tbl_visit.belongsTo(models.tbl_client, {foreignKey: 'clientId', as: 'client'});
    tbl_visit.belongsTo(models.tbl_seller, {foreignKey: 'srId', as: 'seller'});
  };
  return tbl_visit;
};