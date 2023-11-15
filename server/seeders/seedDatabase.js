const db = require('../config/connection');
const { User } = require('../models');
const seedData = require('./seeds');

db.once('open', async () => {
  try {
    await User.collection.drop();
    for (const user of seedData.users) {
      await User.create(user);
      
    }
    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error("Failed to seed ur bases. Failed good n hard");
    process.exit(1);
  }
});
