// src/example.test.js
const soma = require('./example');

test('soma 1 + 2 para resultar em 3', () => {
  expect(soma(1, 2)).toBe(3);
});
