//longest increasing subsequence in a array
let arr = [10, 9, 2, 5, 3, 7, 101, 18];

function lis(arr) {
  let di = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        di[i] = Math.max(di[i], di[j] + 1);
      }
    }
  }
  return Math.max(...di);
}
console.log(lis(arr));
