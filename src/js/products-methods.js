/*
eslint no-return-assign: 'error'
*/
export function calculateTotalPrice(element) {
  const result = element.priceForOne * element.count;
  if (!Number.isNaN(result)) {
    element.totalPrice = result;
    return true;
  } 
  return false;
}

export function getAllTotalPrice(elements) {
  const result = elements.reduce((accumulator, currentValue) => {
    if (typeof accumulator === 'object') {
      accumulator = accumulator.totalPrice;
    }
    return accumulator + currentValue.totalPrice;
  });
  if (Number.isNaN(result)) {
    return false;
  }
  return result;
}

export function setProductCount(element, count) {
  const countNumber = Number(count);
  if (!Number.isNaN(countNumber) && countNumber > 0) {
    element.count = countNumber;
    return true;
  } else {
    return false;
  }
}

export function setProductPrice(element, price) {
  const priceNumber = Number(price);
  if (!Number.isNaN(priceNumber) && priceNumber > 0) {
    element.priceForOne = priceNumber;
    return true;
  } else {
    return false;
  }
}
