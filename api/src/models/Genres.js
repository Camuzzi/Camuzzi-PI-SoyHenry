const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genres' , {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {timestamps: false}
    );
};