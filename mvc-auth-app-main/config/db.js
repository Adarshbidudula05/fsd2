
import mongoose from "mongoose";

const connectDB = async (mongoUri, dbName) => {
  try {
    if (!mongoUri) {
      throw new Error("MONGO_URI is missing. Check Render Environment.");
    }

    await mongoose.connect(mongoUri, {
      dbName: dbName,
    });

    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("MongoDB Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
