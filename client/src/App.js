import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Category from "./Category";
import Subcategory from "./Subcategory";
import Product from "./Product";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";
import HomeLayout from "./layout/HomeLayout";
import AddEditCategory from "./AddEditCategory";
import EditSubCategory from "./EditSubCategory";
import EditProduct from "./EditProduct";
// import AddSubCategory from "./AddSubCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Subcategory" element={<Subcategory />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/Category" element={<Category />} />
          {/* <Route path="/AddCategory" element={<AddCategory />} /> */}
          <Route path="/add-subcategory" element={<AddSubCategory />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="edit-category/:id" element={<AddEditCategory />} />
          <Route path="/edit-subcategory/:id" element={<EditSubCategory />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/add-subcategory" element={<AddSubCategory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
