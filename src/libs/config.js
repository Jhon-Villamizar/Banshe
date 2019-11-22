import Sequelize from 'sequelize'

const sequelize = new Sequelize('prueba_db', 'root', '1234', {
    dialect: 'mysql'
  })

module.exports = sequelize;