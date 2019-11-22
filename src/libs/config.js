import Sequelize from 'sequelize'

const sequelize = new Sequelize('prueba_db', 'chef', '1', {
    dialect: 'mysql'
  })

module.exports = sequelize;