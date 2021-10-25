import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Calculator from './Calculator';
import Home from '../Home/Home';
import Quotes from '../Quotes/Quotes';

const App = () => (
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Calculator" component={Calculator} />
        <Route path="/Quotes" component={Quotes} />
      </Switch>
    </Router>
  </>
);

export default App;
