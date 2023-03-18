import Brand from "../models/Brand.js";

// get all brands
export const getAllProductBrand = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.status(200).json({
      brands: brands,
      message: "Get all brands success",
    });
  } catch (error) {
    next(error);
  }
};

// create brands
export const createProductBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const brand = await Brand.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: brand,
      message: "Brand Create Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// single brands
export const getSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    res.status(200).json({
      brand: brand,
      message: "Get Single Brand Success",
    });
  } catch (error) {
    next(error);
  }
};

// single brands
export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      message: "Brand Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// single brands
export const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
        photo,
      },
      { new: true }
    );
    res.status(200).json({
      brand,
      message: "Brand Update Successfully",
    });
  } catch (error) {
    next(error);
  }
};
