const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// MongoDB connection
// mongodb://127.0.0.1:27017/digitalflake
mongoose
  .connect("mongodb+srv://mohite:mohite@cluster0.gi2zt9t.mongodb.net/hello", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // 5 seconds
    socketTimeoutMS: 45000, // 45 seconds
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// User model
// const User = mongoose.model('User', new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// }));

// const Category = mongoose.model('Category', new mongoose.Schema({
//   categoryName:{type:String, required:true, unique:true}
// }))
// Subcategory Schema
// const subCategory = mongoose.model('subCategory', new mongoose.Schema({
//   subcategoryName:{type:String, required:true, unique:true}
// }))

// Middleware
app.use(bodyParser.json());
app.use("/", require("./routes"));
// Routes
// User
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Create a new user with the provided email and password
//   try {
//     const newUser = new User({ email, password });
//     await newUser.save();
//     res.json({ message: 'User created successfully', email: newUser.email });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
// //  Category
// app.post('/category', async (req, res) =>{
//   const {categoryName} = req.body;
//   try {
//     const newCategory = new Category({ categoryName});
//     await newCategory.save();
//     res.json({ message: 'Category created successfully', categoryName: newCategory.categoryName });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Server error' });
//   }

// })
// // category edit
// app.put('/category/:id', async (req, res) => {
//   const categoryId = req.params.id;
//   const { categoryName } = req.body;
//   try {
//     const updatedCategory = await Category.findByIdAndUpdate(categoryId, { categoryName }, { new: true });
//     if (!updatedCategory) {
//       console.error('Category not found for ID:', categoryId);
//       return res.status(404).json({ message: 'Category not found' });
//     }
//     console.log('Category updated successfully:', updatedCategory);
//     res.json({ message: 'Category updated successfully', updatedCategory });
//   } catch (error) {
//     console.error('Error updating category:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Subcategory
// app.post('/subcategory', async (req, res) => {
//   const { subcategoryName } = req.body;
//   try {
//     const newSubcategory = new subCategory({ subcategoryName }); // Corrected model name
//     await newSubcategory.save();
//     res.json({ message: 'Subcategory created successfully', subcategoryName: newSubcategory.subcategoryName });
//   } catch (error) {
//     console.error('Error creating subcategory:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Edit Subcategory
// app.put('/subcategory/:id', async (req, res) => {
//   const subcategoryId = req.params.id;
//   const { subcategoryName } = req.body;
//   try {
//     const updatedSubcategory = await Subcategory.findByIdAndUpdate(subcategoryId, { subcategoryName }, { new: true });
//     if (!updatedSubcategory) {
//       return res.status(404).json({ message: 'Subcategory not found' });
//     }
//     res.json({ message: 'Subcategory updated successfully', updatedSubcategory });
//   } catch (error) {
//     console.error('Error updating subcategory:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Product
// app.post('/product', async (req, res) =>{
//   const {product} = req.body;
//   try {
//     const newProduct = new product({ product });
//     await newProduct.save();
//     res.json({ message: 'product created successfully', product: newProduct.product });
//   } catch (error) {
//     console.error('Error creating subcategory:', error);
//     res.status(500).json({ message: 'Server error' });
//   }

// })

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
