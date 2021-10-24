import calculate from '../../logic/calculate';

it('Returns empty string if button is AC', () => {
  const data = { total: '20', next: '5', operation: '' };
  expect(calculate(data, 'AC')).toEqual({
    total: '',
    next: '',
    operation: '',
  });
});
