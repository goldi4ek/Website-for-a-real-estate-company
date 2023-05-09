const {Sequelize}= require('sequelize')

module.exports = new Sequelize(process.env.DB_URL,{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
    ssl: true,
    native:true
  }
}
)
