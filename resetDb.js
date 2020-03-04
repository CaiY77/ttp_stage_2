const { db } = require('./models');

const reset = async () => {
  try {
    await db.sync({ force: true });
    console.log('Database synced!');
  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

reset();
