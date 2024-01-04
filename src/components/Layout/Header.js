import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoMdHome } from "react-icons/io";
import { FaRocket } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo 1.png" alt="ANKASOFT Logo" className="logo" />
        <h2>ANKASOFT | ToDo List APP</h2>
      </div>

      <div>
        <IoMdHome className="home-icon" color="#4E8CE7" />
        <FaRocket className="home-icon" color="black" />
      </div>
    </nav>
  );
};

export default Header;
