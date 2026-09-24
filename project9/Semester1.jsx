function Semester1() {

  const subjects = [
    {
      name: "Mathematics",
      marks: 90,
      grade: "A+"
    },
    {
      name: "Physics",
      marks: 85,
      grade: "A"
    },
    {
      name: "Programming in C",
      marks: 88,
      grade: "A"
    },
    {
      name: "English",
      marks: 82,
      grade: "A"
    }
  ];

  return (
    <div className="page">

      <div className="card">

        <h1>Semester 1</h1>

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
          Semester 1 GPA: <span>8.5</span>
        </div>

      </div>

    </div>
  );
}

export default Semester1