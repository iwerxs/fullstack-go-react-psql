import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Delete() {
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      setName('');
      alert('Student deleted successfully');
    } else {
      alert('Failed to delete student');
    }
  };

  return (
    <div>
      <h1 className="heading-top">Welcome to</h1>
      <h1 className="heading-bottom"><span className="delete-user">Delete</span> page</h1>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td><td className="btn-sub"><input type="submit" value="Delete" /></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Delete;
