const Sequelize = require('sequelize');
const CustomerModel = require('./models/Customer');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        underscored: true,
        freezeTableName: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: false
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    force: false,
    operatorsAliases: {
    }
});

const Customer = CustomerModel(sequelize, Sequelize);

sequelize.sync().then(() => {
    console.log('DB connected')
})

module.exports = {
    Customer
}