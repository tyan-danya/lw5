const moduleFunctions = require('../js/functions.js');

test('Will setPrice assign a value to the element', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  moduleFunctions.setPrice(productsList[0], 100);
  expect(productsList[0].priceForOne).toBe(100);

  moduleFunctions.setPrice(productsList[1], 0);
  expect(productsList[1].priceForOne).toBe(20);

  moduleFunctions.setPrice(productsList[2], 'a');
  expect(productsList[2].priceForOne).toBe(5);
});

test('Will setCount assign a value to the element', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  moduleFunctions.setCount(productsList[0], 100);
  expect(productsList[0].count).toBe(100);

  moduleFunctions.setCount(productsList[1], 0);
  expect(productsList[1].count).toBe(100);

  moduleFunctions.setCount(productsList[2], 'a');
  expect(productsList[2].count).toBe(200);
});

test('Will getAllTotalPrice return the total amount', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  expect(moduleFunctions.getAllTotalPrice(productsList)).toBe(0);

  for (let i = 0; i < productsList.length; i++) {
    moduleFunctions.calculateTotalPrice(productsList[i]);
  }
  expect(moduleFunctions.getAllTotalPrice(productsList)).toBe(5000);
});

test('Will calculateTotalPrice return the total sum of the item', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  moduleFunctions.calculateTotalPrice(productsList[0]);
  expect(productsList[0].totalPrice).toBe(2000);
  moduleFunctions.calculateTotalPrice(productsList[1]);
  expect(productsList[1].totalPrice).toBe(2000);
  moduleFunctions.calculateTotalPrice(productsList[2]);
  expect(productsList[2].totalPrice).toBe(1000);
});