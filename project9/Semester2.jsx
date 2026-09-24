function Semester2() {

  const subjects = [
    {
      name: "Java Programming",
      marks: 86,
      grade: "A"
    },
    {
      name: "DBMS",
      marks: 91,
      grade: "A+"
    },
    {
      name: "Data Structures",
      marks: 84,
      grade: "A"
    },
    {
      name: "Digital Electronics",
      marks: 87,
      grade: "A"
    }
  ];

  return (
    <div className="page">

      <div className="card">

        <h1>Semester 2</h1>

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
          Semester 2 GPA: <span>8.7</span>
        </div>

      </div>

    </div>
  );
}

export default Semester2;