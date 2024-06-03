const Product = require("../models/productModel");



// Get all products
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new product
const addProduct = async (req, res, next) => {
    const { name, subcategory, category, status } = req.body;
    const image = req.file ? req.file.filename : "";
  
    try {
      const newProduct = new Product({ name, subcategory, category, image, status });
      await newProduct.save();
      res.status(201).json({
        message: "Product created successfully",
        product: newProduct,
      });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  
  

// Update an existing product
const editProduct = async (req, res, next) => {
  const productId = req.params.id;
  const { name, image, subcategory, category, status } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, image, subcategory, category, status },
      { new: true }
    );
    if (!updatedProduct) {
      console.error("Product not found for ID:", productId);
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Product updated successfully:", updatedProduct);
    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an existing product
const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      console.error("Product not found for ID:", productId);
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Product deleted successfully:", deletedProduct);
    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
  // home // If needed
};
