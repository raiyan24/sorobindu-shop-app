import express from "express";
import {
  createProductCatagory,
  getAllProductCatagory,
  getSingleProductCatagory,
  deleteProductCatagory,
  updateProductCatagory,
} from "../controllers/productCatagoryController.js";
import { productCatagoryMulter } from "../utils/multer.js";

const router = express.Router();

//routes
router.get("/catagory", getAllProductCatagory);
router.post("/catagory", productCatagoryMulter, createProductCatagory);
router.get("/catagory/:slug", getSingleProductCatagory);
router.delete("/catagory/:id", deleteProductCatagory);
router.put("/catagory/:id", updateProductCatagory);
router.patch("/catagory/:id", updateProductCatagory);

//export
export default router;
