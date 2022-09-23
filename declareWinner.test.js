const declareWinner = require('./declareWinner');

const fighter1 = {
  name: 'Laca',
  health: 100,
  damagePerAttack: 10,
};

const fighter2 = {
  name: 'Pityu',
  health: 100,
  damagePerAttack: 10,
};

const fighter3 = {
  name: 'Szebasztián',
  health: 1000,
  damagePerAttack: 25,
};

test('first fighter should win', () => {
  expect(declareWinner(fighter1, fighter2, 'Laca')).toBe('Laca');
});
test('second fighter should win', () => {
  expect(declareWinner(fighter1, fighter2, 'Pityu')).toBe('Pityu');
});
test('first fighter starts, second fighter wins', () => {
  expect(declareWinner(fighter1, fighter3, 'Laca')).toBe('Szebasztián');
});
