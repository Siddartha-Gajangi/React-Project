import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../styles/DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-content">
      <AnatomySection />
      <HealthStatusCards />
      <div className="bottom-section">
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
      </div>
    </main>
  );
};

export default DashboardMainContent;
