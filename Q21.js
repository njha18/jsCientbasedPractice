//basic version of split without using built in methods
//neha.split("")-["n","e","h","a"] "hello world".split(" ")-["hello","world"]
let str = "neha";

function splitImplementation(str, delimeter) {
  let arr = [];
  let res = "";
  // Special case: delimiter is an empty string
  if (delimeter === "") {
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  }

  for (let i = 0; i < str.length; i++) {
    //handle single delimeter ex-","," ","-" no need it if checking multi delimeter
    // if (str[i] === delimeter) {
    //   arr.push(res);
    //   res = "";
    // }
    // Handle multi-character or  single character delimiters ex="--",",,"etc
    if (str.slice(i, i + delimeter.length) === delimeter) {
      arr.push(res);
      res = "";
      i += delimeter.length - 1;
    } else {
      res += str[i];
    }
  }
  arr.push(res);
  return arr;
}
// console.log(splitImplementation("hello--world--kite", "--"));
// console.log("helloworldkite".split("")); //its not working
console.log(splitImplementation("", ","));
