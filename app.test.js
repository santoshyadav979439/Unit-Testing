const { factorial, sum } = require('./app');
// factorial of a number
test('factorial of 1 is 1', () => {
  expect(factorial(1)).toBe(1);
});
test('factorial of 2 should be 2', () => {
  expect(factorial(2)).toBe(2);
});
test('factorial of 4 should be 24', () => {
  expect(factorial(4)).toBe(24);
});
test('factorial of 5 should be 120', () => {
  expect(factorial(5)).toBe(120);
});

test('Array is contaning apple', () => {
  const fruits = ['apple', 'banana', 'apple', 'banana'];
  expect(new Set(fruits)).toContain('apple');
  expect(fruits).toHaveLength(4);
});

test(' check instance', () => {
  class A {}
  let obj5 = new A();
  function Name() {
    this.name = 'santosh';
  }
  let obj6 = new Name();
  expect(obj6).toBeInstanceOf(Name);
});

test('mock', () => {
  const mockCallback = jest.fn((a, b) => a + b);
  expect(sum(5, 10, mockCallback)).toBe(15);
});
