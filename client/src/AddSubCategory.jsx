import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai"; // Icon for image upload
import "./AddSubCategory.css";
import Sidebar from "./Sidebar";
import { Navbar } from "react-bootstrap";

const AddSubCategory = () => {
  const navigate = useNavigate();
  const [subCategoryName, setSubCategoryName] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null); // State for image file

  const handleCancel = () => {
    navigate("/SubCategory"); // Redirect to SubCategory component
  };

  const handleImageUpload = (event) => {
    setImageFile(event.target.files[0]); // Store the selected image file
  };

  // Implement form submission logic here (consider API calls or data storage)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", subCategoryName);
    formData.append("category", category);
    formData.append("image", imageFile); // Append the image file
    formData.append("status", "Active"); // Assuming default status is Active

    try {
      const response = await fetch("http://localhost:5000/api/v1/subcategory/add", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Subcategory added successfully!");
        navigate("/SubCategory"); // Redirect on success
      } else {
        console.error("Error adding subcategory:", response.statusText);
        // Handle errors appropriately (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error adding subcategory:", error);
      // Handle errors appropriately (e.g., display an error message)
    }
  };

  return (
    <>
      <div className="add-subcategory-container">
        <form className="add-subcategory-form" onSubmit={handleSubmit}>
          <h2>Add Subcategory</h2>
          <div className="form-group">
            <label htmlFor="subCategoryName">Subcategory Name:</label>
            <input
              type="text"
              name="subCategoryName"
              id="subCategoryName"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageFile">Image:</label>
            <div className="image-upload">
              <input
                type="file"
                name="imageFile"
                id="imageFile"
                accept="image/jpeg"
                onChange={handleImageUpload}
                className="image-input"
              />
              <label htmlFor="imageFile" className="image-upload-label">
                <AiOutlineUpload /> Choose Image (JPEG only)
              </label>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button type="button" className="btn cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSubCategory;
