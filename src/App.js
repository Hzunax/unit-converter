import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Temperature from './components/temperature';
import Running from './components/running';
import Cycling from './components/cycling';
import Swimming from './components/swimming';
import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/running">Running</Link>
            </li>
            <li>
              <Link to="/cycling">Cycling</Link>
            </li>
            <li>
              <Link to="/swimming">Swimming</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/running">
            <Running />
          </Route>
          <Route path="/cycling">
            <Cycling />
          </Route>
          <Route path="/swimming">
            <Swimming />
          </Route>
          <Route path="/">
            <Temperature />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
