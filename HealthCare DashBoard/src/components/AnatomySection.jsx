import React from "react";
import "../styles/Anatomy.css";
import humanBodyImage from "../assets/human-body.jpg";

const AnatomySection = () => {
  return (
    <div className="anatomy-container">  
      
   
      <div className="image-container">
        <img src={humanBodyImage} className="anatomy-image" alt="Anatomical Diagram" />
      </div>

 
      <div className="health-info">
        <h2>Health Overview</h2>
        <ul>
          <li className="healthy">❤️ Healthy Heart</li>
          <li className="warning">💨 Lungs Issue</li>
          <li className="healthy">🦷 Teeth</li>
          <li className="healthy">🦴 Bone</li>
        </ul>
      </div>

    </div>
  );
};

export default AnatomySection;
