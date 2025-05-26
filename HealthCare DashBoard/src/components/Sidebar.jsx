import React from "react";
import "../styles/Sidebar.css";  

const Sidebar = () => {
  const links = [
    "Dashboard", "History", "Calendar", "Appointments",
    "Statistics", "Tests", "Chat", "Support", "Setting"
  ];

  return (
    <nav className="sidebar">
      <h3>General</h3>
    <ul>
      {links.map(link => (
        <li key={link}>{link}</li>
      ))}
    </ul>
    </nav>
  );
};

export default Sidebar;
