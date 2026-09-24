function Overall() {

  const sem1 = 8.5;
  const sem2 = 8.7;
  const sem3 = 8.8;

  const cgpa = (sem1 + sem2 + sem3) / 3;

  return (
    <div className="page">

      <div className="card">

        <h1>Overall Performance</h1>

        <table>

          <thead>
            <tr>
              <th>Semester</th>
              <th>GPA</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Semester 1</td>
              <td>{sem1}</td>
            </tr>

            <tr>
              <td>Semester 2</td>
              <td>{sem2}</td>
            </tr>

            <tr>
              <td>Semester 3</td>
              <td>{sem3}</td>
            </tr>

          </tbody>

        </table>

        <div className="cgpa">

          <p>Overall CGPA</p>

          <h2>{cgpa.toFixed(2)}</h2>

        </div>

      </div>

    </div>
  );
}

export default Overall;