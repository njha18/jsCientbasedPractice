//remove all whitespace from a string
//let str="neha is a good girl"; output-nehaisagoodgirl

let str = "neha is a good girl";
let res = "";
for (let i in str) {
  if (str[i] !== " ") {
    res += str[i];
  }
}
console.log(res);
