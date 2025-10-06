//write a program to reverse a string
//input "hello"
//output "olleh"

let str = "hello";
function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}
console.log(reverseString(str));
//buitin methods
// console.log("hello".split("").reverse().join(""));
