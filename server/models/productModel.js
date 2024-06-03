const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Define the product schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, default: "" },
  subcategory: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
});

// Add auto-incrementing field
ProductSchema.plugin(AutoIncrement, { inc_field: "Id" });

// Create the Product model using the schema
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
