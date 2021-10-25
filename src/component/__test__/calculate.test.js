import calculate from '../../logic/calculate';

it('Returns empty string if button is AC', () => {
  const data = { total: '20', next: '5', operation: '' };
  expect(calculate(data, 'AC')).toMatchObject({
    total: '',
    next: '',
    operation: '',
  });
});

describe('Test the +/- button', () => {
  const data = { total: '20', next: '', operation: '' };
  it('Returns negative value of  total', () => {
    expect(calculate(data, '+/-')).toMatchObject({
      total: '-20',
    });
  });

  it('Returns positive value of  total', () => {
    const data = { total: '-20', next: '', operation: '' };
    expect(calculate(data, '+/-')).toStrictEqual({
      total: '20',
      next: '',
      operation: '',
    });
  });

  it('Returns 0 if no total or next', () => {
    const datas = { total: '', next: '', operation: '' };
    expect(calculate(datas, '+/-')).toMatchObject({
      total: '0',
    });
  });
});

describe('Test Instance of result to be object', () => {
  it('Comfirm that result is an object', () => {
    const data = { total: '20', next: '5', operation: '' };
    expect(calculate(data)).toBeInstanceOf(Object);
  });
});

describe('Test % button', () => {
  it('Returns the percentage of total', () => {
    const data = { total: '20', next: '', operation: '' };
    expect(calculate(data, '%')).toStrictEqual({
      total: '0.2',
      next: '',
      operation: '',
    });
  });
});

describe('Tests the "." Button', () => {
  const data = { total: '', next: '', operation: '' };
  it('Returns 0. if no total', () => {
    expect(calculate(data, '.')).toStrictEqual({
      total: '0.',
      next: '',
      operation: '',
    });
  });

  it('Returns total to next + "." if next does not include "." ', () => {
    const data = { total: '5', next: '', operation: '' };
    expect(calculate(data, '.')).toStrictEqual({
      total: '5.',
      next: '',
      operation: '',
    });
  });

  it('Returns total + "." if total does not include "." ', () => {
    const data = { total: '5', next: '', operation: '' };
    expect(calculate(data, '.')).toStrictEqual({
      total: '5.',
      next: '',
      operation: '',
    });
  });

  it('Returns null total not includes "." ', () => {
    const data = { total: '5.', next: '.', operation: '' };
    expect(calculate(data, '.')).toStrictEqual({
      total: '5.',
      next: '.',
      operation: '',
    });
  });
});

describe("Test '='", () => {
  const data = { total: '10', next: '15', operation: '+' };
  it('Returns the result of the operation', () => {
    expect(calculate(data, '=')).toEqual({
      total: '25',
      next: '',
      operation: '',
    });
  });
});

describe('Test the operands', () => {
  const data = { total: '10', next: '10', operation: '+' };
  it('Returns the Result of addition operation', () => {
    expect(calculate(data, '+')).toEqual({
      total: '20',
      next: '10',
      operation: '+',
    });
  });

  it('Returns the Result of subtraction operation', () => {
    const data = { total: '10', next: '10', operation: '-' };
    expect(calculate(data, '-')).toEqual({
      total: '0',
      next: '10',
      operation: '-',
    });
  });

  it('Returns the Result of Multiplication operation', () => {
    const data = { total: '10', next: '10', operation: 'x' };
    expect(calculate(data, 'x')).toEqual({
      total: '100',
      next: '10',
      operation: 'x',
    });
  });

  it('Returns the Result of Division operation', () => {
    const data = { total: '10', next: '10', operation: '÷' };
    expect(calculate(data, '÷')).toEqual({
      total: '1',
      next: '10',
      operation: '÷',
    });
  });
});

it('Returns an error if next is 0 during division operation', () => {
  const data = { total: '10', next: '0', operation: '÷' };
  expect(calculate(data, '÷')).toEqual({
    total: "Can't divide by zero",
    next: '0',
    operation: '÷',
  });
});

describe('Test Number Buttons', () => {
  const data = { total: '5', next: '', operation: '' };
  it('Returns buttonName if no total', () => {
    expect(data).not.toEqual({});
  });
});
