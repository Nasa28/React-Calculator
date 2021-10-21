import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../../../logic/calculate';
import '../../styles/app.css';
import NavBar from '../NavBar/NavBar';

const App = () => {
  const [data, setData] = useState({
    total: '',
    next: '',
    operation: '',
  });
  const handleClick = (buttonName) => {
    setData(calculate(data, buttonName));
  };
  const { total, next } = data;
  const currentResult = total || next;
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <div className="app">
            <Display result={currentResult} />
            <ButtonPanel clickHandler={handleClick} />
          </div>
        </Switch>
      </Router>
    </>
  );
};

export default App;
