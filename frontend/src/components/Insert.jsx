import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Insert() {
  const [name, setName] = useState('');
  const [klass, setKlass] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, klass, grade }),
    });
    if (response.ok) {
      setName('');
      setKlass('');
      setGrade('');
      alert('Student inserted successfully');
    } else {
      alert('Failed to insert student');
    }
  };

  return (
    <div>
      <h1 className="heading-top">Welcome to</h1>
      <h1 className="heading-bottom"><span className="insert-user">Insert</span> page</h1>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor="klass">Class</label></td>
              <td><input type="number" id="klass" value={klass} onChange={(e) => setKlass(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor="grade">Grade</label></td>
              <td><input type="number" id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td><td className="btn-sub"><input type="submit" value="Submit" /></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Insert;
