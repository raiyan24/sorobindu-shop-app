import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//environment variable
const PORT = process.env.PORT || 9090;

// init express
const app = express();
dotenv.config();

// listening server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
