import React from "react";

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
      
        <p>Appointments: 09:00, 11:00, 13:00, 15:00</p>
      </div>
      <div className="appointment-details">
        <div>Dentist Appointment - 10:00 AM</div>
        <div>Physiotherapy - 02:00 PM</div>
      </div>
    </div>
  );
};

export default CalendarView;