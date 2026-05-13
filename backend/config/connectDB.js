require("dotenv").config();
const connection_string = process.env.MONGO_URI;
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://iamjatinbajajfake_db_user:Jatin123@cluster0.xssepic.mongodb.net/wishlist",
    );
  } catch (e) {
    console.log(e);
  }
}
connectDB();

module.exports=connectDB;