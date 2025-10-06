//basic version of substring without using builtin methods
//neha.substring(1,2)-e
let start = 0;
let end = 0;
function substringImplementation(str, start, end) {
  let res = "";
  let len;
  //3,1 extraction
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  //if str len is shorter than end
  if (end > str.length) {
    len = str.length;
  } else {
    len = end;
  }
  for (let i = start; i < len; i++) {
    res += str[i];
  }
  return res;
}
console.log(substringImplementation("neha", 3, 1));
