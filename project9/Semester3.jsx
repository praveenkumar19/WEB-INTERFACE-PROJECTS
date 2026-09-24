function Semester3() {

  const subjects = [
    {
      name: "Python Programming",
      marks: 90,
      grade: "A+"
    },
    {
      name: "Computer Networks",
      marks: 88,
      grade: "A"
    },
    {
      name: "Operating Systems",
      marks: 85,
      grade: "A"
    },
    {
      name: "Cyber Security",
      marks: 92,
      grade: "A+"
    }
  ];

  return (
    <div className="page">

      <div className="card">

        <h1>Semester 3</h1>

        <table>

          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>

            {subjects.map((subject, index) => (

              <tr key={index}>

                <td>{index + 1}</td>

                <td>{subject.name}</td>

                <td>{subject.marks}</td>

                <td>{subject.grade}</td>

              </tr>

            ))}

          </tbody>

        </table>

        <div className="gpa">
          Semester 3 GPA: <span>8.8</span>
        </div>

      </div>

    </div>
  );
}

export default Semester3;