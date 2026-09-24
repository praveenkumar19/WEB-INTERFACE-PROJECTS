import React, { useState } from "react";
import "./studentportal.css";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="containerr">
      <h1>Student Portal</h1>

      <button
        className="btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails ? (
        <div className="profile-box">
          <h2>Student Profile</h2>

          <p><strong>Name:</strong> Praveen Kumar</p>
          <p><strong>Roll No:</strong> CB101</p>
          <p><strong>Department:</strong> Cyber Security</p>
          <p><strong>Year:</strong> II Year</p>
          <p><strong>Email:</strong> praveen@example.com</p>
        </div>
      ) : (
        <p className="message">Click the button to view profile details.</p>
      )}
    </div>
  );
}

export default App;