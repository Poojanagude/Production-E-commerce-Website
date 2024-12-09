import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//Routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//Update Routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get Product
router.get("/get-product", getProductController);

//get Single Product
router.get("/get-product/:slug", getSingleProductController);

//get Photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//product filter
router.post("/product-filters", productFiltersController);

// product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search Product
router.get("/search/:keyword", searchProductController);

//Similar/Related Product
router.get("/related-product/:pid/:cid",relatedProductController);

//category wise product
router.get("/product-category/:slug",productCategoryController);
//payment routes
//token
router.get('/braintree/token',braintreeTokenController);

//payments
router.post('/braintree/payment',requireSignIn,brainTreePaymentController);

export default router;
