import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import "./AddProduct.css"; // Import your CSS file

function AddProduct() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/Product");
    };

    return (
        <div className="add-product-container">
            <form className="add-product-form">
                <div className="form-header">
                    <h3><AiOutlineProduct /> Add Product</h3>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName" id="productName" className="input-field"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" className="select-field">
                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="grocery">Grocery</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="subcategory">SubCategory</label>
                    <select id="subcategory" name="subcategory" className="select-field">
                        <option value="realme">Realme</option>
                        <option value="xiomi">Xiomi</option>
                        <option value="vivo">Vivo</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn save-btn">Save</button>
                    <button type="button" className="btn cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
