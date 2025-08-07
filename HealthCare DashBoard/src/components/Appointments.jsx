// components/Appointments.jsx
import React from 'react';

const Appointments = () => {
  const appointments = [
    { id: 1, patient: 'Kiran', time: '09:00 AM', type: 'Check-up', status: 'confirmed' },
    { id: 2, patient: 'Suman', time: '10:30 AM', type: 'Lab Results', status: 'pending' },
    { id: 3, patient: 'Varun', time: '02:00 PM', type: 'Emergency', status: 'urgent' },
    { id: 4, patient: 'Venkatesh', time: '03:30 PM', type: 'Follow-up', status: 'confirmed' },
    { id: 5, patient: 'Laya', time: '04:15 PM', type: 'Consultation', status: 'pending' }
  ];

  const AppointmentCard = ({ appointment }) => (
    <div className="appointment-card">
      <div className="appointment-header">
        <div className="appointment-time">
          <span className="time-icon">🕐</span>
          <span>{appointment.time}</span>
        </div>
        <div className={`status-badge ${appointment.status}`}>
          {appointment.status}
        </div>
      </div>
      <div className="appointment-details">
        <p className="appointment-patient">{appointment.patient}</p>
        <p className="appointment-type">{appointment.type}</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="action-buttons">
        <button className="btn btn-primary">
          <span className="btn-icon">➕</span>
          Schedule Appointment
        </button>
        <button className="btn btn-secondary">
          <span className="btn-icon">📅</span>
          Calendar View
        </button>
      </div>

      <div className="two-column">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Today's Schedule</h3>
          </div>
          <div className="appointment-list">
            {appointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>

        <div className="card calendar-section">
          <div className="card-header">
            <h3 className="card-title">Weekly Calendar</h3>
          </div>
          <div className="calendar-grid">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="calendar-day">
                <div className="calendar-day-label">{day}</div>
                <div className={`calendar-day-content ${index === 3 ? 'today' : ''}`}>
                  {index === 3 && <span className="calendar-today-label">Today</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;