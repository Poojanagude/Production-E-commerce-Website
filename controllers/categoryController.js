import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exists",
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "New Category Created",
      category
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in category",
    });
  }
};

//updateCategioryController
export const updateCategioryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Update category",
    });
  }
};

//getcategoryController
export const categoryController = async (req,res) =>{
    try {
        const category=await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: " All Category List",
            category,
          });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error While All category",
        });
        
    }
};


//get singleCategoryController
export const singleCategoryController = async (req,res) =>{
    try {
        const category= await categoryModel.findOne({ slug:req.params.slug })
        res.status(200).send({
            success: true,
            message: " Get Single Category Successfully",
            category,
          });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error While Single category",
          });
          
    }
};


///deleteCategoryController
export const deleteCategoryController= async (req,res) =>{
    try {
        const { id}=req.params
     await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: " Category  deleted Successfully",
           
          });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error While Delete category",
          });
    }
};