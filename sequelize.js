const Sequelize = require('sequelize');
const CustomerModel = require('./models/Customer');

const sequelize = new Sequelize('fthing', 'timur', 'G4rudaTerbangTinggi', {
    host: '178.128.214.119',
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