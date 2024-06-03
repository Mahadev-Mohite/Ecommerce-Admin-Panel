import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Subcategory.css";

function SubCategory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch subcategories from the API
    axios
      .get("http://localhost:5000/api/v1/subcategory/get")
      .then((response) => {
        setSubCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  }, []);

  const handleAddNew = () => {
    navigate("/add-subcategory");
  };

  const handleEdit = (id) => {
    navigate(`/edit-subcategory/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/subcategory/delete/${id}`)
      .then(() => {
        setSubCategories(
          subCategories.filter((subCategory) => subCategory._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting subcategory:", error);
      });
  };

  const filteredSubCategories = subCategories.filter((subCategory) =>
    subCategory.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="subcategory-list">
        <div className="subcategory-list-header">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subcategories"
          />
          <button className="add-new-btn" onClick={handleAddNew}>
            Add New
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Subcategory Name</th>
              <th>Category Name</th>
              <th>Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubCategories.map((subCategory) => (
              <tr key={subCategory._id}>
                <td>{subCategory.id}</td>
                <td>{subCategory.name}</td>
                <td>{subCategory.category}</td>
                <td>
                  <img
                    src={`http://localhost:5000/static/uploads/${subCategory.image}`}
                    alt={subCategory.name}
                    width="50"
                    height="50"
                  />
                </td>
                <td className={subCategory.status.toLowerCase()}>
                  {subCategory.status}
                </td>
                <td>
                  <button onClick={() => handleEdit(subCategory._id)}>
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(subCategory._id)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubCategory;
