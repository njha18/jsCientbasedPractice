//write a function to compress the string
//aaabbc-a3b2c1

function compressString(str) {
  let count = 1;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    //compare with next and only inc count when not matches
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }
  return res;
}
console.log(compressString("aaabbc"));
