const mongoose = require("mongoose");

const dataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONECTION_STRING);
    console.log("db is connected");
  } catch (error) {
    console.log("db connection Failed");
  }
};

module.exports = dataBase;
