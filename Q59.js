//function to generate all permutations of an array
let arr = [1, 2, 3];
function permutation(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) return [arr];
    let char = arr[i];
    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    let subpermutation = permutation(remaining);
    for (let perms of subpermutation) {
      result.push([char, ...perms]);
    }
  }
  return result;
}
console.log(permutation(arr));
