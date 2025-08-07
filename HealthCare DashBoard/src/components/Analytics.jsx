// components/Analytics.jsx
import React from 'react';

const Analytics = () => {
  const demographics = [
    { label: 'Age 18-30', percentage: 25, color: 'blue' },
    { label: 'Age 31-50', percentage: 35, color: 'green' },
    { label: 'Age 51-70', percentage: 30, color: 'yellow' },
    { label: 'Age 70+', percentage: 10, color: 'red' }
  ];

  const conditions = [
    { condition: 'Hypertension', percentage: 32, color: 'blue' },
    { condition: 'Diabetes', percentage: 28, color: 'green' },
    { condition: 'Heart Disease', percentage: 18, color: 'red' },
    { condition: 'Asthma', percentage: 22, color: 'yellow' }
  ];

  const monthlyData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 60 },
    { month: 'Mar', value: 90 },
    { month: 'Apr', value: 120 },
    { month: 'May', value: 150 },
    { month: 'Jun', value: 180 }
  ];

  return (
    <div>
      <div className="analytics-grid">
        <div className="chart-container">
          <h3 className="chart-title">📊 Patient Demographics</h3>
          <div className="progress-list">
            {demographics.map(item => (
              <div key={item.label} className="progress-item">
                <span className="progress-label">{item.label}</span>
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${item.color}`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="progress-value">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🩺 Common Conditions</h3>
          <div className="progress-list">
            {conditions.map(item => (
              <div key={item.condition} className="progress-item">
                <span className="progress-label">{item.condition}</span>
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${item.color}`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="progress-value">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-container">
        <h3 className="chart-title">📈 Monthly Trends</h3>
        <div className="bar-chart">
          {monthlyData.map(item => (
            <div key={item.month} className="bar-item">
              <div 
                className="bar" 
                style={{ height: `${item.value}px` }}
                title={`${item.month}: ${item.value} patients`}
              ></div>
              <span className="bar-label">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;