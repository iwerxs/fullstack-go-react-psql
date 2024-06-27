import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Update() {
  const [name, setName] = useState('');
  const [klass, setKlass] = useState('');
  const [grade, setGrade] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      const data = await response.json();
      setKlass(data.klass);
      setGrade(data.grade);
    } else {
      alert('Student not found');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, klass, grade }),
    });
    if (response.ok) {
      alert('Student updated successfully');
    } else {
      alert('Failed to update student');
    }
  };

  return (
    <div>
      <h1 className="heading-top">Welcome to</h1>
      <h1 className="heading-bottom"><span className="update-user">Update</span> page</h1>
      <div className="content">
        <form onSubmit={handleSearch}>
          <table>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td><td className="btn-sub"><input type="submit" value="Search" /></td>
            </tr>
          </table>
        </form>
        {klass && grade && (
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td><label htmlFor="klass">Class</label></td>
                <td><input type="number" id="klass" value={klass} onChange={(e) => setKlass(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label htmlFor="grade">Grade</label></td>
                <td><input type="number" id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} /></td>
              </tr>
              <tr>
                <td></td><td className="btn-sub"><input type="submit" value="Update" /></td>
              </tr>
            </table>
          </form>
        )}
      </div>
    </div>
  );
}

export default Update;

