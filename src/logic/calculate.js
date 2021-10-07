import Big from 'big.js';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      if (next) {
        next *= -1;
      } else total *= -1;

      break;

    case 'AC':
      total = null;
      next = null;
      operation = null
      break;

    default:
      throw Error('Invalid input');
      break;
  }
};

export default calculate;
