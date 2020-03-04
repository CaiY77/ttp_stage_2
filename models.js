const { Sequelize } = require('sequelize')

const db = new Sequelize({
  database: 're_tweets_db',
  dialect: 'postgres',
  define: { underscored: true }
});
