const express = require("express");
const router = express.Router();
const categoryController = require("../../../controllers/categoryController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, "../../../static/uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Specify the folder to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + Date.now()); // Generate a unique name for the file
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

router.get("/get", categoryController.getCategories);
router.post("/add", upload.single("image"), categoryController.addCategory); // Note the middleware usage here
router.put(
  "/update/:id",
  upload.single("image"),
  categoryController.editCategory
); // Also handle file uploads for updates
router.delete("/delete/:id", categoryController.deleteCategory);

module.exports = router;
