import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  const operator = ['÷', 'x', '+', '-'];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (buttonName === '+/-') {
    if (!next) {
      total *= -1;
    } else {
      next *= -1;
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '%') {
    if (next) {
      next /= 100;
    } else {
      total /= 100;
    }
  }

  if (buttonName === '.') {
    if (!total) {
      total += '0.';
    } else if (!next.includes(buttonName) && operation) {
      next += '.';
    } else if (!total.includes('.') && !operation) {
      total += '.';
    } else if (!next && operation) {
      next += '0.';
    }
  }

  if (operator.includes(buttonName)) {
    if (!total) {
      total = null;
    } else if (!next && total) {
      operation = buttonName;
    } else if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
    return data;
  }

  if (numbers.includes(buttonName)) {
    if (total && operation) {
      next += buttonName;
    } else if (total && !operation) {
      total += buttonName;
    }
    return data;
  }

  if (buttonName === '=') {
    if (!next && total) {
      return total;
    } if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
    return data;
  }

  return data;
};

export default calculate;
