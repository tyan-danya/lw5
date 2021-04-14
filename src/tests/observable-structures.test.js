import { createObservableArray } from '../utils/observable-structures';

test('Will the callback work when the product changes', () => {
  const mockFn = jest.fn();
  let productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];

  productsList = createObservableArray(productsList, mockFn);
  productsList[0].name = 'Мясо';
  expect(mockFn).toHaveBeenCalled();

  mockFn.mockClear();
  productsList[0] = 'Мясо';
  expect(mockFn).toHaveBeenCalled();
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
