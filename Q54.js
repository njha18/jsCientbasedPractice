//find the product of all elements in an array except the current index without using division

let arr = [1, 2, 3, 4, 5];

function product(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;

    for (let j = 0; j < arr.length; j++)
      if (i !== j) {
        product *= arr[j];
      }
    result.push(product);
  }
  return result;
}
console.log(product(arr));
