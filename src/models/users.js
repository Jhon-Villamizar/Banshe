module.exports = (sequelize, DataType) => {

    const Users = sequelize.define('Users', {
        id: {
            
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UserDoc: {
            type: DataType.STRING,
            validate: {
                notEmpty: true
            }
        },
        Apps: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                notEmpty: true,
                notNull: true,
            }
        },

    });


    return Users;
};