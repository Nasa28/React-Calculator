import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result;

  if (operation === '+') {
    result = num1.plus(num2);
  } else if (operation === '-') {
    result = num1.minus(num2);
  } else if (operation === 'x') {
    result = num1.times(num2);
  } else if (operation === '%') {
    result = num1.div(Big('100'));
  }
  if (operation === '÷') {
    if (num2.valueOf() === '0') {
      result = "Can't divide by zero";
    } else result = num1.div(num2);
  }
  return result.toString();
};

export default operate;
