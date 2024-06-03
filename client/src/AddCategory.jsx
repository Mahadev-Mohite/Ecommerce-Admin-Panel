import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import axios from "axios";
import "./AddCategory.css";

function AddCategory() {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState("");
    const [uploadImage, setUploadImage] = useState(null);
    const [status, setStatus] = useState("Active");

    const handleCancel = () => {
        navigate("/Category");
    };

    const handleImageChange = (e) => {
        setUploadImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("categoryName", categoryName);
        formData.append("status", status);
        if (uploadImage) {
            formData.append("image", uploadImage);
        }

        try {
            const response = await axios.post("http://localhost:5000/api/v1/category/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data);
            // Navigate to the category list page after successful addition
            navigate("/Category");
        } catch (error) {
            console.error("Error adding category:", error);
            // Handle error cases
        }
    };

    return (
        <div className="add-category-container">
            <form className="add-category-form" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h3><AiOutlineAppstoreAdd /> Add Category</h3>
                </div>
                <div className="form-group">
                    <label htmlFor="categoryName">Category Name</label>
                    <input 
                        type="text" 
                        name="categoryName" 
                        id="categoryName" 
                        className="input-field" 
                        placeholder="Enter category name" 
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select 
                        name="status" 
                        id="status" 
                        className="input-field" 
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="uploadImage">Upload Image</label>
                    <input 
                        type="file" 
                        name="uploadImage" 
                        id="uploadImage" 
                        className="input-field" 
                        onChange={handleImageChange} 
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn save-btn">Save</button>
                    <button type="button" className="btn cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddCategory;
