const { Sequelize } = require('sequelize')

const db = new Sequelize({
  database: 'ttp_stocks',
  dialect: 'postgres',
  define: { underscored: true }
});
