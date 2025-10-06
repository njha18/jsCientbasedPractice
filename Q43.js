//function to find the uninon of two arrays

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7];
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(union(arr1, arr2));
