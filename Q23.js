//find all permutations of a string
//str-abc output-[abc,acb,bca,bac,cab,cba]
function permutation(str) {
  let arr = [];
  //base case
  if (str.length === 1) return [str];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    let subpermutation = permutation(remaining);
    for (let perm of subpermutation) {
      arr.push(char + perm);
    }
  }
  return arr;
}
console.log(permutation("abc"));
