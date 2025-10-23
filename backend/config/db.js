import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dian:asadian180823@cluster0.z1qcdgu.mongodb.net/sixlicious_website"
    );
    console.log("✅ DB Connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};


