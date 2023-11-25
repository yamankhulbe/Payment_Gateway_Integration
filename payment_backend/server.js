import { app } from "./index.js";
import Razorpay from "razorpay";
import { connectDb } from "./config/database.js";
connectDb();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});
app.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});
