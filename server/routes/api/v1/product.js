const express = require("express");
const router = express.Router();
const productController = require("../../../controllers/prooductController");
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
      cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = file.originalname.replace(ext, '') + '-' + Date.now() + ext;
      cb(null, fileName);
    },
  });

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

router.post("/add", upload.single("image"), productController.addProduct); // Note the middleware u

router.get("/get", productController.getProducts);
router.put("/editProduct", productController.editProduct);
router.delete("/deleteProduct", productController.deleteProduct);

module.exports = router;
