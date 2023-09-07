const mongoose = require("mongoose");
require("dotenv").config();

const dbURL: string = process.env.DB_URL || "";

const dbConnect = async () => {
  try {
    await mongoose.connect(dbURL).then((data: any) => {
      console.log(`database connected with ${data.connection.host}`);
    });
  } catch (error: any) {
    console.log(error.message);
    setTimeout(dbConnect, 5000);
  }
};

export default dbConnect;
