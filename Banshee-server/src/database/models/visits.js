'use strict';
module.exports = (sequelize, DataTypes) => {
  const visits = sequelize.define('visits', {
    date: DataTypes.DATE,
    sellerId: DataTypes.INTEGER,
    net: DataTypes.INTEGER,
    visitTotal: DataTypes.INTEGER,
    description: DataTypes.STRING,
    clientId: DataTypes.INTEGER,
  }, {});
  visits.associate = function(models) {
    visits.belongsTo(models.clients,{foreignKey: 'clientId', as: 'client'});
    visits.belongsTo(models.sellers,{foreignKey: 'sellerId', as: 'seller'});
  };
  return visits;
};