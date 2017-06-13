const assert = require('assert');
const calculator = require('./index');

const shoppingList1 = [
  'banana',
  'papaya',
  'papaya',
  'papaya',
];

const message1 = 'shopping list 1 equals 115ct';

assert.equal(calculator(shoppingList1), 115, message1)
  || console.log('TEST:', message1);

const shoppingList2 = [
  'orange',
  'orange',
  'papaya',
  'papaya',
  'papaya',
  'papaya',
  'papaya',
];

const message2 = 'shopping list 2 equals 260ct';

assert.equal(calculator(shoppingList2), 260, message2)
  || console.log('TEST:', message2);

const shoppingList3 = [
  'banana',
  'apple',
  'papaya',
  'papaya',
  'papaya',
  'papaya',
  'papaya',
  'papaya',
  'papaya',
];

const message3 = 'shopping list 3 equals 290ct';

assert.equal(calculator(shoppingList3), 290, message3)
  || console.log('TEST:', message3);

const shoppingList4 = [
  'papaya',
  'papaya',
];

const message4 = 'shopping list 4 equals 100ct';

assert.equal(calculator(shoppingList4), 100, message4)
  || console.log('TEST:', message4);
