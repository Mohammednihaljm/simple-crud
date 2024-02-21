const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://mohammednihaljm:mohammednihaljm123@cluster0.xzsb5g9.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Database connected");
  } catch (error) {
    console.log(`Error :${error}`);
  }
};

module.exports = connectDB;
