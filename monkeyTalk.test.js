const monkeyTalk = require('./monkeyTalk');

test('empty string', () => {
  expect(monkeyTalk('')).toBe('Ook.');
});
test('entering "alma" should return "eek"', () => {
  expect(monkeyTalk('alma')).toBe('Eek.');
});
test('entering "Arany János" should return "eek"', () => {
  expect(monkeyTalk('Arany János')).toBe('Eek ook.');
});
test('entering "Apple," should return "eek"', () => {
  expect(monkeyTalk('Apple,')).toBe('Eek.');
});
