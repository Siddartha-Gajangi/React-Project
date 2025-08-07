// components/Overview.jsx
import React from 'react';

const Overview = () => {
  const stats = {
    totalPatients: 847,
    todayAppointments: 24,
    criticalCases: 8,
    bedOccupancy: 78
  };

  const patients = [
    { id: 1, name: 'Tony', age: 45, condition: 'Hypertension', status: 'stable', lastVisit: '2024-08-05', nextAppointment: '2026-08-12' },
    { id: 2, name: 'Tarak', age: 32, condition: 'Diabetes Type 2', status: 'monitoring', lastVisit: '2024-08-03', nextAppointment: '2026-08-10' },
    { id: 3, name: 'Roopa', age: 58, condition: 'Heart Disease', status: 'critical', lastVisit: '2024-08-06', nextAppointment: '2026-08-08' }
  ];

  const appointments = [
    { id: 1, patient: 'Johny', time: '09:00 AM', type: 'Check-up', status: 'confirmed' },
    { id: 2, patient: 'Sarah', time: '10:30 AM', type: 'Lab Results', status: 'pending' },
    { id: 3, patient: 'Sameer', time: '02:00 PM', type: 'Emergency', status: 'urgent' }
  ];

  const StatCard = ({ icon, title, value, change, color }) => (
    <div className="stat-card">
      <div className="stat-card-content">
        <div className="stat-info">
          <p className="stat-title">{title}</p>
          <p className="stat-value">{value}</p>
          {change && (
            <div className={`stat-change ${change > 0 ? 'positive' : 'negative'}`}>
              <span className="trend-icon">{change > 0 ? '📈' : '📉'}</span>
              <span>{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        <div className={`stat-icon ${color}`}>
          <span className="icon-large">{icon}</span>
        </div>
      </div>
    </div>
  );

  const PatientCard = ({ patient }) => (
    <div className="patient-card">
      <div className="patient-header">
        <div className="patient-info">
          <div className="patient-avatar">
            <span>👤</span>
          </div>
          <div>
            <h3 className="patient-name">{patient.name}</h3>
            <p className="patient-age">Age: {patient.age}</p>
          </div>
        </div>
        <div className={`status-badge ${patient.status}`}>
          {patient.status}
        </div>
      </div>
      <div className="patient-details">
        <p><strong>Condition:</strong> {patient.condition}</p>
        <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
        <p><strong>Next Appointment:</strong> {patient.nextAppointment}</p>
      </div>
    </div>
  );

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
      {/* Stats Grid */}
      <div className="stats-grid">
        <StatCard
          icon="👥"
          title="Total Patients"
          value={stats.totalPatients}
          change={5.2}
          color="blue"
        />
        <StatCard
          icon="📅"
          title="Today's Appointments"
          value={stats.todayAppointments}
          change={-2.1}
          color="green"
        />
        <StatCard
          icon="⚠️"
          title="Critical Cases"
          value={stats.criticalCases}
          change={-8.3}
          color="red"
        />
        <StatCard
          icon="🏥"
          title="Bed Occupancy"
          value={`${stats.bedOccupancy}%`}
          change={3.7}
          color="purple"
        />
      </div>

      {/* Recent Activity */}
      <div className="two-column">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Patients</h3>
            <a href="#" className="view-all-link">View All</a>
          </div>
          <div className="patient-list">
            {patients.map(patient => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Today's Appointments</h3>
            <a href="#" className="view-all-link">View All</a>
          </div>
          <div className="appointment-list">
            {appointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;