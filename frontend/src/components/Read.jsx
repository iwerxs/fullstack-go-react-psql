import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Read() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/read')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h1 className="heading-top">Welcome to</h1>
      <h1 className="heading-bottom"><span className="read-user">Read</span> page</h1>
      <table className="table-read">
        <tr>
          <th className="table-head">Name</th>
          <th className="table-head">Class</th>
          <th className="table-head">Grade</th>
        </tr>
        {students.map((student) => (
          <tr key={student.name}>
            <td className="table-data">{student.name}</td>
            <td className="table-data">{student.klass}</td>
            <td className="table-data">{student.grade}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Read;
