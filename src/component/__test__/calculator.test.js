import calculate from '../../logic/calculate';

it('Returns empty string if button is AC', () => {
  const data = { total: '100', next: '200', operation: null };
  expect(calculate(data, 'AC')).toEqual({
    total: '',
    next: '',
    operation: '',
  });
});
