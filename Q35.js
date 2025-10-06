//check if an array is sorted in asc order

let arr = [1, 2, 3, 4, 7, 6, 7];
let res = [...arr];
res = res.sort((a, b) => a - b);
let sorted = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === res[i]) {
    continue;
  } else {
    sorted = false;
    break;
  }
}
if (sorted) {
  console.log("array is sorted");
} else {
  console.log("array is not sorted");
}
//better way i < arr.length - 1 will not make i+1 undefined
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i + 1]) {
//     isSorted = false;
//     break;
//   }
// }
