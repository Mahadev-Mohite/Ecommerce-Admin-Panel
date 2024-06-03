import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import your CSS file
import { FaHome, FaThList } from "react-icons/fa";
import { IoCaretForward } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { BsBox } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/home">
            <FaHome className="icon" />
            Home
            <IoCaretForward className="arrow" />
          </Link>
        </li>
        <li>
          <Link to="/category">
            <BiCategory className="icon" />
            Category
            <IoCaretForward className="arrow" />
          </Link>
        </li>
        <li>
          <Link to="/subcategory">
            <FaThList className="icon" />
            Subcategory
            <IoCaretForward className="arrow" />
          </Link>
        </li>
        <li>
          <Link to="/product">
            <BsBox className="icon" />
            Product
            <IoCaretForward className="arrow" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
// import React from 'react';
// import './Sidebar.css'; // Import your CSS file
// import { FaHome, FaThList } from 'react-icons/fa';
// import { IoCaretForward } from 'react-icons/io5';
// import { BiCategory } from 'react-icons/bi';
// import { BsBox } from 'react-icons/bs';

// function Sidebar() {
//   return (
//     <div>
//     <div className="sidebar">

//       <ul>
//         <li>
//           <a href="/Home">
//             <FaHome className="icon" />
//             Home
//             <IoCaretForward className="arrow" />
//           </a>
//         </li>
//         <li>
//           <a href="/Category">
//             <BiCategory className="icon" />
//             Category
//             <IoCaretForward className="arrow" />
//           </a>
//         </li>
//         <li>
//           <a href="/Subcategory">
//             <FaThList className="icon" />
//             Subcategory
//             <IoCaretForward className="arrow" />
//           </a>
//         </li>
//         <li>
//           <a href="/Product">
//             <BsBox className="icon" />
//             Product
//             <IoCaretForward className="arrow" />
//           </a>
//         </li>
//       </ul>
//     </div>
//     {/* <div className="main-body">
//         <img className="logo" src="https://cdn-icons-png.flaticon.com/128/10003/10003663.png" alt="Logo" />
//         <h3>Welcome to digitalflake Admin</h3>
//       </div>
//      */}
//     </div>
//   );
// }

// export default Sidebar;
