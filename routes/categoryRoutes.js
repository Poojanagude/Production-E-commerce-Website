import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
    categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategioryController,
} from "../controllers/categoryController.js";
import slugify from "slugify";
const router = express.Router();

//Routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//update
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategioryController
);

//getAll
router.get("/get-category",categoryController)

//single-Category
router.get('/single-category/:slug',singleCategoryController)

//delete-category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)

export default router;

