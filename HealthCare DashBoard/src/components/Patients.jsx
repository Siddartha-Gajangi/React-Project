// components/Patients.jsx
import React from 'react';

const Patients = () => {
  const patients = [
    { id: 1, name: 'John', age: 45, condition: 'Hypertension', status: 'stable', lastVisit: '2024-08-05' },
    { id: 2, name: 'Sarah', age: 32, condition: 'Diabetes Type 2', status: 'monitoring', lastVisit: '2024-08-03' },
    { id: 3, name: 'Mike', age: 58, condition: 'Heart Disease', status: 'critical', lastVisit: '2024-08-06' },
    { id: 4, name: 'Rosy', age: 28, condition: 'Asthma', status: 'stable', lastVisit: '2024-08-04' },
    { id: 5, name: 'Rohan', age: 65, condition: 'Arthritis', status: 'monitoring', lastVisit: '2024-08-02' },
    { id: 6, name: 'Lahari', age: 42, condition: 'Migraine', status: 'stable', lastVisit: '2024-08-01' }
  ];

  return (
    <div>
      <div className="action-buttons">
        <button className="btn btn-primary">
          <span className="btn-icon">➕</span>
          Add Patient
        </button>
        <button className="btn btn-secondary">
          <span className="btn-icon">🔽</span>
          Filter
        </button>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h3 className="table-title">All Patients</h3>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Status</th>
                <th>Last Visit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(patient => (
                <tr key={patient.id}>
                  <td>
                    <div className="table-patient-info">
                      <div className="table-patient-avatar">
                        <span>👤</span>
                      </div>
                      <span>{patient.name}</span>
                    </div>
                  </td>
                  <td>{patient.age}</td>
                  <td>{patient.condition}</td>
                  <td>
                    <span className={`status-badge ${patient.status}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td>{patient.lastVisit}</td>
                  <td>
                    <a href="#" className="table-action-link">View Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;