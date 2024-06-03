import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditSubCategory.css';

function EditSubCategory() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('Active');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the subcategory details using the id from the URL
    // This is a placeholder logic, replace it with actual data fetching logic
    const fetchSubCategory = async () => {
      const subCategory = await getSubCategoryById(id); // Replace with actual API call
      setName(subCategory.name);
      setCategory(subCategory.category);
      setImage(subCategory.image);
      setStatus(subCategory.status);
    };

    fetchSubCategory();
  }, [id]);

  const getSubCategoryById = (id) => {
    // Placeholder data, replace with actual data fetching logic
    const subCategories = [
      { id: 223, name: 'Smartphones', category: 'Mobile', image: 'path/to/image.jpg', status: 'Active' },
      { id: 224, name: 'Ultrabooks', category: 'Laptop', image: 'path/to/image.jpg', status: 'Inactive' },
      { id: 225, name: 'Organic', category: 'Grocery', image: 'path/to/image.jpg', status: 'Active' }
    ];

    return subCategories.find(subCategory => subCategory.id === parseInt(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add the logic to update the subcategory, e.g., sending it to an API

    // For now, we simply log the values to the console
    console.log({ id, name, category, image, status });

    // Navigate back to the subcategory list or show a success message
    navigate('/subcategory');
  };

  return (
    <div className="edit-subcategory">
      <h2>Edit Subcategory</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Subcategory Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Category Name</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="submit">Save</button>
        <button type="cancel">cancel</button>
      </form>
    </div>
  );
}

export default EditSubCategory;
