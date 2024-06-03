import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddEditCategory.css";

const AddEditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    id: id || "",
    name: "",
    image: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement add/edit functionality here
    navigate("/Category");
  };

  return (
    <div className="add-edit-category">
      <h3>{id ? "Edit Category" : "Add New Category"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={category.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={category.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={category.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="btn save-btn">
          Save
        </button>
        <button
          type="button"
          className="btn cancel-btn"
          onClick={() => navigate("/Category")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEditCategory;
