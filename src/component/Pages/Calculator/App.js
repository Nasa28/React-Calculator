import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../styles/app.css';
import NavBar from '../NavBar/NavBar';
import Calculator from './Calculator';


const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route>
        <Calculator />
      </Route>
    </Switch>
  </Router>
);

export default App;
