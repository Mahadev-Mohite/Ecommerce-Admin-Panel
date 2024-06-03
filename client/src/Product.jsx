import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Product.css";

function Product() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/products/get");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddNew = () => {
    navigate("/add-product");
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/products/deleteProduct/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="product-list">
        <div className="product-list-header">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products"
          />
          <button className="add-new-btn" onClick={handleAddNew}>
            Add New
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Subcategory</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.Id}>
                <td>{product.Id}</td>
                <td>{product.name}</td>
                <td>
                  <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.name}
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                </td>
                <td>{product.subcategory}</td>
                <td>{product.category}</td>
                <td className={product.status.toLowerCase()}>{product.status}</td>
                <td>
                  <button onClick={() => handleEdit(product._id)}>✏️</button>
                  <button onClick={() => handleDelete(product._id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
