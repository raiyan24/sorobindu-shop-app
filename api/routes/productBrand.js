import express from "express";
import {
  createProductBrand,
  getAllProductBrand,
  getSingleBrand,
  deleteBrand,
  updateBrand,
} from "../controllers/productBrandController.js";
import { productBrandMulter } from "../utils/multer.js";

const router = express.Router();

//routes
router.get("/brand", getAllProductBrand);
router.post("/brand", productBrandMulter, createProductBrand);
router.get("/brand/:id", getSingleBrand);
router.delete("/brand/:id", deleteBrand);
router.put("/brand/:id", updateBrand);
router.patch("/brand/:id", updateBrand);

//export
export default router;
