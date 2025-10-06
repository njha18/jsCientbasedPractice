//write a function to rotate an array by k posiion
//left rotate right rotate
let arr = [1, 2, 3, 4, 5];
function leftRotate(arr, k) {
  let res = [];
  let n = arr.length;
  k = k % n;
  return arr.slice(k).concat(arr.slice(0, k));
}
console.log(leftRotate(arr, 2));
//left rotation
function rightRotate(arr, k) {
  let res = [];
  let n = arr.length;
  k = k % n;
  return arr.slice(-k).concat(arr.slice(0, n - k));
}
console.log(rightRotate(arr, 2));
