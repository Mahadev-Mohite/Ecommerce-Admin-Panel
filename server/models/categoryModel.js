const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  categoryName: { type: String, required: true },
  image: { type: String },
  status: { type: String, enum: ["Active", "Inactive"], required: true },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
