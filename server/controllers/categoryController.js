const Category = require("../models/categoryModel");

// Add a new category
const addCategory = async (req, res, next) => {
  let { categoryName, status } = req.body;
  console.log(req.body);
  const image = req.file ? req.file.filename : null;  // Store only the filename

  try {
    // Find the category with the highest id
    const lastCategory = await Category.findOne().sort({ id: -1 }).exec();
    // If lastCategory exists, increment the id, otherwise start with 102
    let id = lastCategory ? lastCategory.id + 1 : 102;

    const newCategory = new Category({ id, categoryName, image, status });
    await newCategory.save();
    res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all categories
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Edit an existing category
const editCategory = async (req, res, next) => {
  const categoryId = req.params.id;
  const { categoryName, status } = req.body;
  const image = req.file ? req.file.filename : null;  // Store only the filename
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { categoryName, image, status },
      { new: true }
    );
    if (!updatedCategory) {
      console.error("Category not found for ID:", categoryId);
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a category
const deleteCategory = async (req, res, next) => {
  const categoryId = req.params.id;
  try {
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      console.error("Category not found for ID:", categoryId);
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addCategory,
  getCategories,
  editCategory,
  deleteCategory,
};
