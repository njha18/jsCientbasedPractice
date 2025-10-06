//find the longest word in a string "I am learning JavaScript programming"
//output 11 for programming

let str = "I am learning JavaScript programming";
str = str.split(" ");
let max = 0;
let ch = "";
for (let i of str) {
  if (i.length > max) {
    max = i.length;
    ch = i;
  }
}
console.log(ch);
