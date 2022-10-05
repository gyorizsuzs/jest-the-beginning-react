const palindromeChainLength = require('./palindromeChainLength');

test('entering 123 should return 321', () => {
  expect(palindromeChainLength.reverseNumber(123)).toBe(321);
});
test('entering 121 should return true', () => {
  expect(palindromeChainLength.isPalindrome(121)).toBe(true);
});
test('entering 123 should return false', () => {
  expect(palindromeChainLength.isPalindrome(123)).toBe(false);
});
test('entering 121 should return 0', () => {
  expect(palindromeChainLength.palindromeChainLength(121)).toBe(0);
});
test('entering 56 should return 1', () => {
  expect(palindromeChainLength.palindromeChainLength(56)).toBe(1);
});
test('entering 89 should return 24', () => {
  expect(palindromeChainLength.palindromeChainLength(89)).toBe(24);
});
test('entering 196 should return  Number is too big or a Lychrel number!', () => {
  expect(() => palindromeChainLength.palindromeChainLength(196)).toThrow(
    'Number is too big or a Lychrel number!'
  );
});
