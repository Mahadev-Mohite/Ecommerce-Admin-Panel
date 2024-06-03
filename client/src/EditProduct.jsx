import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditProduct.css';

function EditProduct() {
  const { id } = useParams();
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('Active');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the product details using the id from the URL
    // This is a placeholder logic, replace it with actual data fetching logic
    const fetchProduct = async () => {
      const product = await getProductById(id); // Replace with actual API call
      setProductName(product?.productName);
      setCategory(product?.category);
      setSubcategory(product?.subcategory);
      setImage(product?.image);
      setStatus(product?.status);
    };

    fetchProduct();
  }, [id]);

  const getProductById = (id) => {
    console.log('lsjlfl')
    // Placeholder data, replace with actual data fetching logic
    const products = [
      { id: 323, productName: 'iPhone 13', category: 'Mobile', subcategory: 'Smartphones', image: 'path/to/image.jpg', status: 'Active' },
      { id: 324, productName: 'MacBook Air', category: 'Laptop', subcategory: 'Ultrabooks', image: 'path/to/image.jpg', status: 'Inactive' },
      { id: 325, productName: 'Organic Apples', category: 'Grocery', subcategory: 'Organic', image: 'path/to/image.jpg', status: 'Active' }
    ];

// lsfl
const product = products.find(product => product.id === parseInt(id));
console.log('Fetched product:', product);
return product;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add the logic to update the product, e.g., sending it to an API

    // For now, we simply log the values to the console
    console.log({ id, productName, category, subcategory, image, status });

    // Navigate back to the product list or show a success message
    navigate('/product');
  };

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Subcategory</label>
          <input
            type="text"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
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
        <button type="cancel">Cancel</button>
      </form>
    </div>
  );
}

export default EditProduct;
