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
      next: '',
      operation: '',
    });
  });

  it('Returns positive value of  total', () => {
    const data = { total: '-20', next: '', operation: '' };
    expect(calculate(data, '+/-')).toMatchObject({
      total: '20',
      next: '',
      operation: '',
    });
  });

  it('Returns 0 if no total or next', () => {
    const datas = { total: '', next: '', operation: '' };
    expect(calculate(datas, '+/-')).toMatchObject({
      total: '0',
      next: '',
      operation: '',
    });
  });
});

it('Comfirm that result is an object', () => {
  const data = { total: '20', next: '5', operation: '' };
  expect(calculate(data)).toBeInstanceOf(Object);
});
