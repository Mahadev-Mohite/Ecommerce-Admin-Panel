const express = require("express");
const router = express.Router();
const authController = require("../../../controllers/authController");
// const { default: Category } = require("../../../../client/src/Category");

router.post("/login", authController.login);
module.exports = router;
