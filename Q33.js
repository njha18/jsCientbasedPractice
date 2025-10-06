//find the sum of all elements in an array

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(result);
