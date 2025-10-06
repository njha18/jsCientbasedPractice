//implement a function to find all subsets of a given array
let arr = [1, 2, 3];
function getSubset(arr) {
  let result = [[]];
  for (let num of arr) {
    let newSubset = [];
    for (let subset of result) {
      newSubset.push([...subset, num]);
    }
    result.push(...newSubset);
  }
}
getSubset(arr);
