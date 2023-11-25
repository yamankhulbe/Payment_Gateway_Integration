import mongoose from "mongoose";

export const connectDb = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URL);
  console.log(`Mongodb is connnected with ${connection.host}`);
};
connectDb();
