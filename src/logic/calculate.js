import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  let operators = ['÷', 'X', '+', '-'];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    if (!next) {
      total *= -1;
    } else {
      next *= -1;
    }
  }
  /*
 The pseudo-codes goes in here.
 1. if the buttonName is AC, total = null, operation = null, next = null
 2. if buttonName == "+/-"
 (a) if no next, total x -1, 
 (b) else next x -1
 
 3. If buttonName = %

 if next, next/=100, else total/=100
 
 4 if buttonName = "."
 (a)if no total , total+= "0."
 (b) if next does not include "." and operation, next+= "."
 (c) if no next and operation, next += "0."
 (d) if total does not include "." and no operation total += '.';

 (5) if operator.includes(buttonName) && total = null, total = 0

 if next && operator.includes(buttonname)

 if (operator.includes(buttonName)) {
    if (total && !next) {
      operation = btnName;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = '';
      operation = buttonName;
    }
    return data;
  }


   if (buttonName === '=') {
    if (total && !next) {
      total = total;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = '';
      operation = '';
    }

    return data;
  }
  return data;
};



if (operator.includes(buttonname))
 if (!total || (total && !operation)) {
      data.total += btnName;
    }

    if (total && operation) {
      data.next += btnName;
    }
    return data;
  }
 */
  return data;
};

export default calculate;
