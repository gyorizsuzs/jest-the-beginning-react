const findUnique = require("./findUnique");

const firstUnique = [1, 2, 2];
const secondUnique = [2, 1, 2];
const thirdUnique = [8, 8, 1567];
const firstUndefined = [];

test('should return "1"', () => {
  expect(findUnique(firstUnique)).toBe(1);
});

test('second should return "1"', () => {
  expect(findUnique(secondUnique)).toBe(1);
});

test('third should return "1567"', () => {
  expect(findUnique(thirdUnique)).toBe(1567);
});

test("empty should throw error", () => {
  expect(() => findUnique(firstUndefined)).toThrow(undefined);
});
