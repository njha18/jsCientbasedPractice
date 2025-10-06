//fn to find the longest common prefix among an array of strings
// let str=["flower","flight","flow"]-fl

let arr = ["flower", "flight", "flow"];
function longestPrefix(arr) {
  let res = "";
  let fixed = arr[0];
  //to avoid errors when array is []
  if (arr.length === 0) return "";
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < fixed.length; j++) {
      if (arr[i][j] === fixed[j]) {
        res += fixed[j];
      } else {
        break;
      }
    }
    fixed = res;
    res = "";
  }
  return fixed;
}
console.log(longestPrefix(arr));
