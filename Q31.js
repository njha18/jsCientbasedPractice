//function to find maximum and min numbers in array
let arr = [1, 4, 89, 90, 67];
function maxmin(arr) {
  let result = arr.sort((a, b) => a - b);
  return {
    maxNumber: result[result.length - 1],
    minNumber: result[0],
  };
}
console.log(maxmin(arr));
//Sorting takes O(n log n) time. But you can find min and max in O(n) time by scanning the array once:
function maxmin(arr) {
  let minNumber = arr[0];
  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) maxNumber = arr[i];
    if (arr[i] < minNumber) minNumber = arr[i];
  }

  return { maxNumber, minNumber };
}

console.log(maxmin(arr)); // { maxNumber: 90, minNumber: 1 }
