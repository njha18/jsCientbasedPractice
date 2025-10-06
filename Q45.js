//function to split an array into chunks opf size n
let arr = [1, 2, 34, 7, 9, 0];
function arrayChunks(arr, n) {
  let res = [];
  for (let i = 0; i < arr.length; i += n) {
    res.push(arr.slice(i, i + n));
  }
  return res;
}
console.log(arrayChunks(arr, 4));
