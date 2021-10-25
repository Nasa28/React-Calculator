import React, { useState } from 'react';
import Display from './Display';
import calculate from '../../../logic/calculate';
import ButtonPanel from './ButtonPanel';
import '../../styles/app.css';

const Calculator = () => {
  const [data, setData] = useState({
    total: '',
    next: '',
    operation: '',
  });
  const handleClick = (buttonName) => {
    setData(calculate(data, buttonName));
  };
  const { total, next } = data;
  const currentResult = next || total;
  return (
    <>
      <div className="main">
        <h3>Lets Do Some Maths!</h3>
        <div className="app">
          <Display result={currentResult} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
