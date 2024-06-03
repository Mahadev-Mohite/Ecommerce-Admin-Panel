import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Category from "./Category";
import "./Home.css";

import "./Navbar.css";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
      </div>
      <div className="main-body">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/128/10003/10003663.png"
          alt="Logo"
        />
        <h3>Welcome to digitalflake Admin</h3>
      </div>
    </>
  );
}

export default Home;
