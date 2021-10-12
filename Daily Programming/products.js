/**
 * This problem was asked by Uber.
 * Given an array of integers, return a new array such that each element
 * at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * You can't use division.
 */

const getProducts = (arr) => {
  let rightProd = [1],
    cumProduct = 1;

  for (let i = 1; i < arr.length; i++) {
    cumProduct *= arr[i - 1];
    rightProd.push(cumProduct);
  }

  let leftProd = [1];

  cumProduct = 1;

  for (let i = arr.length - 2; i >= 0; i--) {
    cumProduct *= arr[i + 1];
    leftProd.push(cumProduct);
  }

  leftProd = leftProd.reverse();

  let products = [];

  for (let i = 0; i < arr.length; i++) {
    cumProduct = leftProd[i] * rightProd[i];
    products.push(cumProduct);
  }

  return products;
};

console.log(getProducts([1, 2, 3, 4, 5]));
