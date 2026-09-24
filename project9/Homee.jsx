function Homee({ photo, signature }) {
  return (
    <div className="page">
      <div className="card">

        {/* Profile Header */}
        <div className="profile-header">

          {/* Student Details */}
          <div className="profile-info">

            <p className="college-title">
              PRINCE DR. K. VASUDEVAN COLLEGE
            </p>

            <h1>Student Report Card</h1>

            <p className="student-name">
              Praveen Kumar
            </p>

            <div className="student-details">

              <p>
                <b>Register Number:</b>
                <span>411625149031</span>
              </p>

              <p>
                <b>Department:</b>
                <span>CSE - Cyber Security</span>
              </p>

              <p>
                <b>Year:</b>
                <span>II Year</span>
              </p>

            </div>

          </div>

          {/* Student Photo & Signature */}
          <div className="profile-photo">

            <img
              src={photo}
              alt="Praveen Kumar"
              className="profile-image"
            />

            <p className="student-label">
              Student
            </p>

            <img
              src={signature}
              alt="Signature"
              className="signature-image"
            />

            <p className="signature-label">
              Signature
            </p>

          </div>

        </div>

        {/* Welcome Section */}
        <div className="welcome-section">

          <h2>Welcome</h2>

          <p className="description">
            This application displays the student's
            semester-wise academic performance and
            overall CGPA.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Homee;