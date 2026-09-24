import { useState } from "react";
import "./attendance.css";

function attendance() {
  const students = [
    "Praveen",
    "Rahul",
    "Dhasarathi",
    "Parasuraman",
    "Venkatasaarathi",
    "Kalee",
    "Vimal",
    "Bragadeesh",
    "Mani",
    "Varun",
    "Chakaravathy",
    "Peter",
    "Sathya",
    "Mukunth Varadha Rajan",
    "Raghu",
    "Sakthivel",
    "SK",
    "Arumpon",
    "Arivazhagan",
    "Bospandi"
  ];
  const [attendance, setAttendance] = useState(
    Array(20).fill(null)
  );

  const markAttendance = (index, status) => {
    const newAttendance = [...attendance];

    newAttendance[index] = status;

    setAttendance(newAttendance);
  };

  // Count Present students
  const presentCount = attendance.filter(
    (status) => status === "Present"
  ).length;

  // Count Absent students
  const absentCount = attendance.filter(
    (status) => status === "Absent"
  ).length;

  return (
    <div className="container">

      <h1>Attendance Tracker</h1>

      <div className="student-list">

        {students.map((student, index) => (
          <div className="student" key={index}>

            <h3>
              {index + 1}. {student}
            </h3>

            <p>
              Status:{" "}
              {attendance[index] === null
                ? "No Information"
                : attendance[index]}
            </p>

            <button
              onClick={() =>
                markAttendance(index, "Present")
              }
            >
              Present
            </button>

            <button
              onClick={() =>
                markAttendance(index, "Absent")
              }
            >
              Absent
            </button>

          </div>
        ))}

      </div>

      <div className="result">

        <h2>Attendance Summary</h2>

        <p>Total Students: {students.length}</p>

        <p>Total Present: {presentCount}</p>

        <p>Total Absent: {absentCount}</p>

      </div>

    </div>
  );
}

export default attendance;

