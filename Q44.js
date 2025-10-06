//contiguous subarray with the maximum sum kandane's algorithm-contiguous subarray — a subarray where the elements are in a continuous block of the original array (i.e., elements must be next to each other in the same order).
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = arr[0];
let currentSum = 0;
let temp = 0;
let end = 0;
let start = 0;
function contiguous(arr) {
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = temp;
      end = i;
    }
    if (currentSum < 0) {
      currentSum = 0;
      temp = i + 1;
    }
  }
  return { maxSum: maxSum, arrIndex: arr.slice(start, end + 1) };
}
console.log(contiguous(arr));
//if all nos are negative
function kadane(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSum + arr[i]) {
      currentSum = arr[i];
      tempStart = i;
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return { maxSum: maxSum, subarray: arr.slice(start, end + 1) };
}
