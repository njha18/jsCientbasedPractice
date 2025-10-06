//implement a sliding window  to find the maximum sum of k consecutive elements in an array
//better for larger arrays

arr = [2, 1, 5, 1, 3, 2];
k = 3;

let maxSum = 0;
let newSum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (count < k && i <= 2) {
    newSum += arr[i];
    count++;
  } else {
    newSum = newSum - arr[i - k] + arr[i];
  }
  maxSum = Math.max(maxSum, newSum);
}
console.log(maxSum);
//for smaller arrays
arr = [2, 1, 5, 1, 3, 2];
k = 3;
let maxSumm = 0;
for (let i = 0; i < arr.length - k; i++) {
  let sum = 0;

  for (let j = i; j < i + k; j++) {
    sum += arr[j];
  }
  maxSumm = Math.max(maxSumm, sum);
}
console.log(maxSumm);
