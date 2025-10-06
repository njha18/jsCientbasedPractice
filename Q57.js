//write a function to find median of two sorted arrays
let arr1 = [1, 2, 3, 4, 10];
let arr2 = [5, 6, 7, 9, 15];

function findMedian(arr1, arr2) {
  let result = [...arr1, ...arr2];
  result = result.sort((a, b) => a - b);
  let median;
  let n = result.length;
  if (n % 2 === 0) {
    median = (result[n / 2] + result[n / 2 - 1]) / 2;
  } else {
    median = result[Math.floor(n / 2)];
  }
  return median;
}
console.log(findMedian(arr1, arr2));
