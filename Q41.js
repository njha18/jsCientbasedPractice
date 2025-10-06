//find all pairs in an array that sum up to a given number

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let sum = 6;
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === sum) {
//       res.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(res);
//other way

let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 6;
let res = [];
for (let i = 0; i < arr.length; i++) {
  let othernum = sum - arr[i];
  if (arr.slice(i + 1).includes(othernum)) {
    res.push([arr[i], othernum]);
  }
}
console.log(res);
