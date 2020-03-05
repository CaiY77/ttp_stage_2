const { User, Stock } = require('./models');

// delete everything in the database

const main = async () => {

  await User.destroy({
    where: {}
  });
  await Stock.destroy({
    where: {}
  });


  const testUser = await User.create({
    fullname: 'Testing',
    email: 'test@gmail.com',
    password: 'test123',
  });

  const testStock = await Stock.create({
    company: 'Facebook, Inc.',
    symbol: 'FB',
    qty: 10,
    price: 50
  })

await testStock.setUser(testUser);

}

const run = async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  } finally {
    await process.exit();
  }
}

run();
