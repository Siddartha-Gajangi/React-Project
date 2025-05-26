import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content-layout">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
