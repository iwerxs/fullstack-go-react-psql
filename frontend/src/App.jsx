import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Insert from './components/Insert';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <Router>
      <div className="header">
        <div className="taskbar">
          <Link to="/">Home</Link>
          <Link to="/insert">Insert</Link>
          <Link to="/read">Read</Link>
          <Link to="/update">Update</Link>
          <Link to="/delete">Delete</Link>
        </div>
      </div>
      <div className="root">
        <Switch>
          <Route path="/insert">
            <Insert />
          </Route>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="footer">
        <h4>Copyright &copy; 2024</h4>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1 className="heading-top">This is a</h1>
      <h1 className="heading-bottom"><span className="home-user">Full-Stack</span> Application</h1>
      <div className="content">
        <div className="cards">
          <div className="card">
            <Link to="/insert"><img src="/assets/insert.png" alt="insert" height="130px" /></Link>
            <Link to="/read"><img src="/assets/read.png" alt="read" height="130px" /></Link>
          </div>
          <div className="card">
            <Link to="/update"><img src="/assets/update.png" alt="update" height="130px" /></Link>
            <Link to="/delete"><img src="/assets/delete.png" alt="delete" height="130px" /></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

