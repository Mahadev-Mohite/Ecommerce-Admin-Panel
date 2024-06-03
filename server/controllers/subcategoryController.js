const Subcategory = require("../models/subcategoryModel");

// Add a new subcategory
const addSubcategory = async (req, res, next) => {
  const { name, category, status } = req.body;
  const image = req.file ? req.file.filename : "";

  try {
    const newSubcategory = new Subcategory({ name, category, image, status });
    await newSubcategory.save();
    res.status(201).json({
      message: "Subcategory created successfully",
      subcategory: newSubcategory,
    });
  } catch (error) {
    console.error("Error creating subcategory:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all subcategories
const getSubcategories = async (req, res, next) => {
  try {
    const subcategories = await Subcategory.find();
    res.status(200).json(subcategories);
  } catch (error) {
    console.error("Error getting subcategories:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Edit an existing subcategory
const editSubcategory = async (req, res, next) => {
  const subcategoryId = req.params.id;
  const { name, category, image, status } = req.body;
  try {
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(
      subcategoryId,
      { name, category, image, status },
      { new: true }
    );
    if (!updatedSubcategory) {
      console.error("Subcategory not found for ID:", subcategoryId);
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.status(200).json({
      message: "Subcategory updated successfully",
      subcategory: updatedSubcategory,
    });
  } catch (error) {
    console.error("Error updating subcategory:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a subcategory
const deleteSubcategory = async (req, res, next) => {
  const subcategoryId = req.params.id;
  try {
    const deletedSubcategory = await Subcategory.findByIdAndDelete(subcategoryId);
    if (!deletedSubcategory) {
      console.error("Subcategory not found for ID:", subcategoryId);
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.status(200).json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    console.error("Error deleting subcategory:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addSubcategory,
  getSubcategories,
  editSubcategory,
  deleteSubcategory,
};
