import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operator = ['÷', 'x', '+', '-'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  }

  if (buttonName === '+/-') {
    if (!next) {
      total = (total *= -1).toString();
    } else {
      next = (next *= -1).toString();
    }
  }

  if (buttonName === '%') {
    if (next) {
      next = (next /= 100).toString();
    } else {
      total = (total /= 100).toString();
    }
  }

  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    } else if (!next.includes(buttonName) && operation) {
      next += '.';
    } else if (!total.includes('.') && !operation) {
      total += '.';
    } else if (!next && operation) {
      total = '0.';
    }
  }

  if (operator.includes(buttonName)) {
    if (!total) {
      total = '';
    } else if (!next && total) {
      operation = buttonName;
    } else if (total && next && operation) {
      total = operate(total, next, operation);
    }
  }

  if (numbers.includes(buttonName)) {
    if (!total) {
      total = buttonName;
    } else if (operation) {
      next += buttonName;
    } else if (total && !operation) {
      total += buttonName;
    }
  }

  if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = '';
      operation = '';
    }
  }
  return { total, next, operation };
};

export default calculate;
