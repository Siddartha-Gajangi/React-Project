import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
      <h1>Healthcare.</h1></div>
      <div className="header-actions">
        <input type="text" placeholder="Search..." />
        <span>🔔</span>
        <span className="user">👤 User</span>
        <button className="add">➕ Add</button>
      </div>
    </header>
  );
};

export default Header;
