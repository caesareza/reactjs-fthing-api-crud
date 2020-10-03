module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        email: type.STRING,
        password: type.STRING,
        gender: type.INTEGER,
        is_married: type.INTEGER,
        address: type.STRING,
        created_at: type.DATE,
        status: type.INTEGER
    })
}