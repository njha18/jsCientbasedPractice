//second largest no in array
let arr = [100, 0, 97, 123, 78];
let res = [...new Set(arr)];
res = arr.sort((a, b) => b - a);
console.log(res[1]);
//for larger arrays
// let arr = [100, 0, 97, 123, 78, 123];
// let res = arr.sort((a, b) => b - a);

// let first = res[0];
// let secondLargest = null;

// for (let i = 1; i < res.length; i++) {
//   if (res[i] !== first) {
//     secondLargest = res[i];
//     break;
//   }
// }

// console.log(secondLargest); // ✅ 100
