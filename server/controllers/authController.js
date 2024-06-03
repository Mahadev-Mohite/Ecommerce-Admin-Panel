const User = require("../models/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    console.log("hellow");
    const newUser = new User({ email, password });
    await newUser.save();
    res.json({ message: "User created successfully", email: newUser.email });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  login,
};
