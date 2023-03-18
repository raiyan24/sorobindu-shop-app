import mongoose from "mongoose";

// Create MongoDB Connection
const mongoDBConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected Successfully`.bgBlue.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

//export connection
export default mongoDBConnect;
