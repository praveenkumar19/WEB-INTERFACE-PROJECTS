import "./StudentDashboard.css";
import profilePhoto from "./assets/profile1.png";

const student = {
  name: "Praveen Kumar A",
  registerNumber: "411625149031",
  department: "CSE(Cyber Security)",
  year: "II Year - Semester 3",
  cgpa: "8.6",
  attendance: 96.1,
};

const subjects = [
  ["CS501", "Data Structures & Algorithms", 4],
  ["CS502", "Database Management Systems", 4],
  ["CS503", "Operating Systems", 3],
  ["CS504", "Computer Networks", 3],
  ["CS505", "Web Technologies", 3],
];

function Header() {
  return <header className="header"><div className="brand"><span className="brand-mark">P</span><div><p>Praveen College</p><h1>Student Dashboard</h1></div></div><div className="semester-chip">Academic Year 2026-27</div></header>;
}

function StudentCard({ details }) {
  return <section className="student-card" aria-labelledby="student-name">
    <div className="student-top"><img src={profilePhoto} alt={`${details.name}'s profile`} /><div><p className="eyebrow">Student profile</p><h2 id="student-name">{details.name}</h2><p className="register-number">Register no. {details.registerNumber}</p></div></div>
    <dl className="student-details"><div><dt>Department</dt><dd>{details.department}</dd></div><div><dt>Current year</dt><dd>{details.year}</dd></div></dl>
    <div className="metric-row"><div><span>CGPA</span><strong>{details.cgpa}</strong><small>out of 10</small></div><div><span>Attendance</span><strong>{details.attendance}%</strong><small className="good">Good standing</small></div></div>
  </section>;
}

function SubjectList() {
  return <section className="subjects-panel" aria-labelledby="subjects-heading"><div className="panel-heading"><div><p className="eyebrow">Current semester</p><h2 id="subjects-heading">Registered subjects</h2></div><span className="count-badge">{subjects.length} subjects</span></div><ul className="subject-list">{subjects.map(([code, name, credits]) => <li key={code}><span className="subject-code">{code}</span><span className="subject-name">{name}</span><span className="credits">{credits} credits</span></li>)}</ul></section>;
}

function EligibilityCard() {
  return <aside className="eligibility-card" aria-labelledby="eligibility-heading"><p className="eyebrow">Placement readiness</p><h2 id="eligibility-heading">You are eligible</h2><p className="eligibility-copy">You meet the current semester and placement criteria.</p><div className="eligibility-checks"><div><span>Semester eligibility</span><b className="eligible">Eligible</b></div><div><span>Placement status</span><b className="eligible">Eligible</b></div></div></aside>;
}

export default function Project1() {
  return <div className="dashboard-shell"><Header /><main><section className="welcome"><p className="eyebrow"></p><h2>Your academic overview</h2><p>Keep track of your course load, attendance, and placement readiness in one place.</p></section><div className="dashboard-grid"><StudentCard details={student} /><SubjectList /><EligibilityCard /></div></main><footer>Copyright 2026 Ft.Boring College - Student portal</footer></div>;
}