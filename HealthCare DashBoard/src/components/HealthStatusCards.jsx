import React from "react";

const HealthStatusCards = () => {
  const cards = [
    { title: "Lungs", date: "26 May 2025", status: "⚠️ Issue detected" },
    { title: "Teeth", date: "22 May 2025", status: "✅ Healthy" },
    { title: "Bone", date: "15 May 2025", status: "✅ Normal" }
  ];

  return (
    <div className="health-status-cards">
      {cards.map((card, index) => (
        <div key={index} className="status-card">
          <h4>{card.title}</h4>
          <p>{card.date}</p>
          <p>{card.status}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
