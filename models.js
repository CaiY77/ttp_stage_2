const { Sequelize } = require('sequelize')

const db = new Sequelize({
  database: 'ttp_stocks',
  dialect: 'postgres',
  define:{
      underscored: true,
      returning: true
  }
});

const User = db.define('users', {

  fullname:Sequelize.STRING,

  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password:Sequelize.STRING,

  wallet:{
    type: Sequelize.INTEGER,
    defaultValue: 5000
  }

});

const Stock = db.define('stocks', {
  company: Sequelize.STRING,
  ticker: Sequelize.STRING,
  qty: Sequelize.INTEGER,
  price: Sequelize.INTEGER
})

User.hasMany(Stock, {
  onDelete: 'cascade',
});

Stock.belongsTo(User)

module.exports = { User, Stock, db };
