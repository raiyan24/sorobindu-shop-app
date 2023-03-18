import Catagory from "../models/Catagory.js";
import { createError } from "../utils/createErros.js";

//get all product catagory
export const getAllProductCatagory = async (req, res, next) => {
  try {
    const data = await Catagory.find();
    res.status(200).json({
      catagories: data,
      message: "Get all data success",
    });
  } catch (error) {
    next(error);
    f;
  }
};

//create product catagory
export const createProductCatagory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Catagory.create({
      name: name,
      slug: slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      catagory: data,
      message: "Catagory Added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Single Product Catagory
export const getSingleProductCatagory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Catagory.findOne({ slug });
    res.status(200).json({
      catagory: data,
      message: "Single Catagory Success",
    });
  } catch (error) {
    next(error);
  }
};

//delete product catagory
export const deleteProductCatagory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Catagory.findByIdAndDelete(id);
    res.status(200).json({
      message: "Catagory Delete Success",
    });
  } catch (error) {
    next(next);
  }
};

//update product catagory
export const updateProductCatagory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Catagory.findByIdAndUpdate(
      id,
      {
        name: name,
        slug: slug,
      },
      { new: true }
    );
    res.status(200).json({
      catagory: data,
      message: "Catagory Update Success",
    });
  } catch (error) {
    next(error);
  }
};
