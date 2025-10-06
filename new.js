//fn to find the longest common prefix among an array of strings
// let str=["flower","flight","flow"]-fl
let arr = ["flower", "flight", "flow"];

function commonPrefix(arr) {
  let res = "";
  let fixed = arr[0];
  let str = "";
  for (let i = 0; i < arr.length; i += 1) {
    for (let ch in fixed) {
      if (arr[i + 1]) {
        str = arr[i + 1];
        if (str[ch] === fixed[ch]) {
          res += fixed[ch];
        }
      } else {
        break;
      }
    }
    fixed = res;
    console.log(fixed);
    res = "";
  }
  return fixed;
}
console.log(commonPrefix(arr));
