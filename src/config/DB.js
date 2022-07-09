const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(` ✔️ Connected successfully with MongoDB...`);
  } catch (err) {
    console.log(` ❌ Could not connected Error: ${err} `);
  }
};

module.exports = connectDatabase;
