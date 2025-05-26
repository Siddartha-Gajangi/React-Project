import React from "react";
import "../styles/ActivityFeed.css";

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>📅 You have <strong>3 appointments</strong> scheduled this week.</p>
      
      <div className="activity-chart">
        <div className="bar" style={{ height: "60%" }}>Monday</div>
        <div className="bar" style={{ height: "80%" }}>Wednesday</div>
        <div className="bar" style={{ height: "50%" }}>Friday</div>
      </div>
    </div>
  );
};

export default ActivityFeed;
