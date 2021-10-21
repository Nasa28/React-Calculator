import React, { useState } from 'react';
import Display from './Display';
import calculate from '../../../logic/calculate';
import ButtonPanel from './ButtonPanel';

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
  const currentResult = total || next;
  return (
    <div className="app">
      <Display result={currentResult} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
