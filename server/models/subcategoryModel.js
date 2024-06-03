const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Define the subcategory schema
const SubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, default: "" },
  status: { type: String, required: true },
});

// Apply the auto-increment plugin to the 'id' field
SubcategorySchema.plugin(AutoIncrement, { inc_field: "id" });

// Create the Subcategory model using the schema
const Subcategory = mongoose.model("Subcategory", SubcategorySchema);

// Export the Subcategory model
module.exports = Subcategory;
