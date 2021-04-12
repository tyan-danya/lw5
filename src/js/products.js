/*
eslint no-param-reassign: "error"
*/
import {
  calculateTotalPrice,
  getAllTotalPrice,
  setProductCount,
  setProductPrice,
} from './products-methods.js';

import { createObservableArray } from '../utils/observable-structures';

function addEventDblClick(element) {
  element.addEventListener('dblclick', (event) => {
    event.target.readOnly = false;
  });
}

window.onload = function onload() {
  function updateUI() {
    const tableTemplateSource = document.querySelector('.table-template').innerHTML;
    const tableTemplate = Handlebars.compile(tableTemplateSource);
    const result = getAllTotalPrice(productsList);
    const tableHTML = tableTemplate({ productsList, result });
    document.querySelector('.product-table').innerHTML = tableHTML;
    const inputs = document.querySelectorAll('.product-table-row-cell__input');
    inputs.forEach(addEventDblClick);
    inputs.forEach((input) => {
      input.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          const elementId = Number(input.getAttribute('data-id'));
          let productsListIndex;
          productsList.forEach((element, i) => {
            if (element.id === elementId) {
              productsListIndex = i;
            }
          });
          let error = false;
          if (input.classList.contains('product-table-row-cell__input--count')) {
            error = !setProductCount(productsList[productsListIndex], Number(event.target.value));
          } else if (input.classList.contains('product-table-row-cell__input--price')) {
            error = !setProductPrice(productsList[productsListIndex], Number(event.target.value));
          }
          if (error) {
            alert('Invalid input');
          } else {
            calculateTotalPrice(productsList[productsListIndex]);
          }
        }
      });
    });
  }

  let productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  for (let i = 0; i < productsList.length; i++) {
    calculateTotalPrice(productsList[i]);
  }
  productsList = createObservableArray(productsList, updateUI);
  updateUI();
};
