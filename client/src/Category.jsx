import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Category.css";
import AddCategory from "./AddCategory";
import { useNavigate } from "react-router-dom";

function Category() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000/api/v1/category";

  const [refresh, setRefresh]= useState(0);


  

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  



  }, [refresh]);

  const addCategory = (categoryName) => {
    axios
      .post(`${baseURL}/add`, { categoryName })
      .then((response) => {
        const newCategory = response.data.category;
        setCategories([...categories, newCategory]);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  const editCategory = (id, categoryName) => {
    axios
      .put(`${baseURL}/update/${id}`, { categoryName })
      .then((response) => {
        const updatedCategory = response.data.category;
        setCategories(
          categories.map((category) =>
            category.id === id ? updatedCategory : category
          )
        );
      })
      .catch((error) => {
        console.error("Error editing category:", error);
      });
  };

  const deleteCategory = async (id) => {
        await axios.delete(`http://localhost:5000/api/v1/category/delete/${id}`);
        setRefresh(refresh+1);
        alert("delete category....")
  };

  const handleEdit = (id) => {
    navigate(`/edit-category/${id}`);
  };

 

  const handleAddNew = () => {
    navigate("/add-category");
  };

  // const filteredCategories = categories.filter((category) =>
  //   category.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const filteredCategories = categories.filter((category) => {

  // })

  return (
    <div>
      <div className="category-list">
        <div className="category-list-header">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search categories"
          />
          <button className="add-new-btn" onClick={handleAddNew}>
            Add New
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Category name</th>
              <th>Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.categoryName}</td>
              <td>
                <img
                  // src={`http://localhost:5000/static/uploads/${category.image}`}
                  src={'http://localhost:5000/static/uploads/1717319891013.jpeg'}
                  alt={category.categoryName}
                  className="category-image"
                />
              </td>
              <td>{category.status}</td>
              <td>
                <button onClick={() => handleEdit(category.id)}>✏️</button>
                <button onClick={() => deleteCategory(category._id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;


// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import './Category.css';
// import AddCategory from "./AddCategory";
// import { useNavigate } from "react-router-dom";

// function Category() {
//   const [initialState, setInitialState] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const [categories, setCategories] = useState([
//     { id: 123, name: 'Mobile', image: 'path/to/image.jpg', status: 'Active' },
//     { id: 124, name: 'Laptop', image: 'path/to/image.jpg', status: 'Inactive' },
//     { id: 125, name: 'Grocery', image: 'path/to/image.jpg', status: 'Inactive' }
//   ]);

//   const handleAddCat = () => {
//     setInitialState(true);
//   };

//   const handleEdit = (id) => {
//     navigate(`/edit-category/${id}`);
//   };

//   const handleDelete = (id) => {
//     setCategories(categories.filter(category => category.id !== id));
//   };

//   const handleAddNew = () => {
//     navigate('/add-category');
//   };

//   const filteredCategories = categories.filter(category =>
//     category.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="category-list">
//         <div className="category-list-header">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search categories"
//           />
//           <button className="add-new-btn" onClick={handleAddNew}>Add New</button>
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Category name</th>
//               <th>Image</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCategories.map(category => (
//               <tr key={category.id}>
//                 <td>{category.id}</td>
//                 <td>{category.name}</td>
//                 <td><img src={category.image} alt={category.name} /></td>
//                 <td className={category.status.toLowerCase()}>{category.status}</td>
//                 <td>
//                   <button onClick={() => handleEdit(category.id)}>✏️</button>
//                   <button onClick={() => handleDelete(category.id)}>🗑️</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Category;
