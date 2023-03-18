import multer from "multer";

//create disk storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname == "catagory-photo") {
      cb(null, "./api/public/catagories");
    }
    if (file.fieldname == "brand-photo") {
      cb(null, "./api/public/brands");
    }
    if (
      file.fieldname == "product-photo" ||
      file.fieldname == "product-gallery-photo"
    ) {
      cb(null, "./api/public/products");
    }
  },
});

// middlewares

//catagories
export const productCatagoryMulter = multer({ storage }).single(
  "catagory-photo"
);

// brand
export const productBrandMulter = multer({ storage }).single("brand-photo");

//products
export const productMulter = multer({ storage }).fields([
  {
    name: "product-photo",
    maxCount: 1,
  },
  {
    name: "product-gallery-photo",
    maxCount: 10,
  },
]);
