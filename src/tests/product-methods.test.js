const moduleFunctions = require('../js/products-methods');

test('Will setPrice assign a value to the element', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  moduleFunctions.setProductPrice(productsList[0], 100);
  expect(productsList[0].priceForOne).toBe(100);

  moduleFunctions.setProductPrice(productsList[1], 0);
  expect(productsList[1].priceForOne).toBe(20);

  let result = moduleFunctions.setProductPrice(productsList[2], 'a');
  expect(result).toBe(false);

  result = moduleFunctions.setProductPrice(productsList[2], 1);
  expect(result).toBe(true);
});

test('Will setCount assign a value to the element', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  moduleFunctions.setProductCount(productsList[0], 100);
  expect(productsList[0].count).toBe(100);

  moduleFunctions.setProductCount(productsList[1], 0);
  expect(productsList[1].count).toBe(100);

  let result = moduleFunctions.setProductCount(productsList[2], 'a');
  expect(result).toBe(false);

  result = moduleFunctions.setProductCount(productsList[2], 1);
  expect(result).toBe(true);
});

test('Will getAllTotalPrice return the total amount', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  let result = moduleFunctions.getAllTotalPrice(productsList);
  expect(result).toBe(false);

  for (let i = 0; i < productsList.length; i++) {
    moduleFunctions.calculateTotalPrice(productsList[i]);
  }
  result = moduleFunctions.getAllTotalPrice(productsList);
  expect(result).toBe(5000);
});

test('Will calculateTotalPrice return the total sum of the item', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 'f' },
  ];
  let result = moduleFunctions.calculateTotalPrice(productsList[0]);
  expect(productsList[0].totalPrice).toBe(2000);
  expect(result).toBe(true);

  result = moduleFunctions.calculateTotalPrice(productsList[1]);
  expect(productsList[1].totalPrice).toBe(2000);
  expect(result).toBe(true);

  result = moduleFunctions.calculateTotalPrice(productsList[2]);
  expect(result).toBe(false);
});
