import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  const appointments = [
    { title: "Health Checkup Complete", time: "On Thursday" },
    { title: "Ophthalmologist", time: "On Saturday" },
    { title: "Cardiologist", time: "On Sunday" },
  ];

  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {appointments.map((apt, index) => (
        <SimpleAppointmentCard key={index} title={apt.title} time={apt.time} />
      ))}
    </div>
  );
};

export default UpcomingSchedule;
