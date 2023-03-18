import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCatagoryRoute from "./routes/productCatagory.js";
import productBrandRoute from "./routes/productBrand.js";
import mongoDBConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";

//environment variable
dotenv.config();
const PORT = process.env.PORT || 9090;

// init express
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// static folder setup
app.use(express.static("api/public"));

//routes
app.use("/api/v1/product", productCatagoryRoute);
app.use("/api/v1/product", productBrandRoute);

//error handler
app.use(errorHandle);

// listening server
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
