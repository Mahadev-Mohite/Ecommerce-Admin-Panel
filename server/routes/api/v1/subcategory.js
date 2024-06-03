const express = require("express");
const router = express.Router();
const subcategoryController = require("../../../controllers/subcategoryController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

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

router.post(
  "/add",
  upload.single("image"),
  subcategoryController.addSubcategory
); // Note the middleware u

router.get("/get", subcategoryController.getSubcategories);

router.put("/update/:id", subcategoryController.editSubcategory);
router.delete("/delete/:id", subcategoryController.deleteSubcategory);
module.exports = router;
