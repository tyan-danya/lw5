import { createObservableArray } from '../utils/observable-structures';

test('Will the callback work when the product changes', () => {
  let productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  let testFlag = 0;
  productsList = createObservableArray(productsList, () => {
    testFlag = 1;
  });

  expect(testFlag).toBe(0);

  productsList[1].name = 'Мясо';

  expect(testFlag).toBe(1);
});

test('Will the value change', () => {
  let productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  productsList = createObservableArray(productsList, () => {});

  expect(productsList[0].name).toBe('Молоко');

  productsList[0].name = 'Мясо';

  expect(productsList[0].name).toBe('Мясо');
});
