import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';
import Insert from './Insert';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';
import './index.css';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/insert" component={Insert} />
        <Route path="/read" component={Read} />
        <Route path="/update" component={Update} />
        <Route path="/delete" component={Delete} />
      </Switch>
    </Router>
  </React.StrictMode>
);

