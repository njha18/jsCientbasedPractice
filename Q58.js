//find the duplicate elements in an array containing numbers from 1 to n.

let arr = [4, 3, 4, 2, 2, 3];
function findDuplicate(arr) {
  let n = arr.length;
  let duplicate = [];
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      duplicate.push(key);
    }
  }
  return duplicate;
}
console.log(findDuplicate(arr));
