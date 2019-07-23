const products = [
  {
    name: 'product 01',
    value: 10,
  },
  {
    name: 'product 02',
    value: 10,
  },
  {
    name: 'product 03',
    value: 10,
  },
  {
    name: 'product 04',
    value: 10,
    subarray: ['string1', 'string2', 'string3', 'string4'],
  },
];
/*
.forEach
.map
.filter
.reduce
.indeOf

*/

// (function start() {
function a1() {
  console.log('Products', products);
}
a1();

let total = 0;
products.forEach((product, index, array) => {
  total += product.value;
});
console.log(total);

let productValues = JSON.parse(JSON.stringify(products));
productValues = productValues.map((product) => {
  product.value += product.value * 0.1;
  return product.value;
});
console.log(productValues);

const total2 = productValues.reduce((a, b) => a + b, 0);
console.log(total2);

const greaterThen33 = products.filter(({ value }) => value > 33);
console.log(greaterThen33);

// }());
