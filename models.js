const { Sequelize } = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/ttp_stocks',{
  database: 'ttp_stocks',
  dialect: 'postgres',
  define:{
      underscored: true,
      returning: true
  },
  dialectOptions:{
    ssl:true,
    rejectUnauthorized:false
  }
});

// const db = new Sequelize({
//   database: 'ttp_stocks',
//   dialect: 'postgres',
//   define:{
//       underscored: true,
//       returning: true
//   },
//   dialectOptions:{
//     ssl:true
//   }
// });

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
    type: Sequelize.FLOAT,
    defaultValue: 5000.00
  }

});

const Stock = db.define('stocks', {
  company: Sequelize.STRING,
  symbol: Sequelize.STRING,
  qty: Sequelize.INTEGER,
  price: Sequelize.FLOAT
})

User.hasMany(Stock, {
  onDelete: 'cascade',
});

Stock.belongsTo(User)

module.exports = { User, Stock, db };
