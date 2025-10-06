//replace all spaces with -

let str = "I am in love with shubham's son not shubham";
let res = "";
for (let i in str) {
  if (str[i] === " ") {
    res += "-";
  } else {
    res += str[i];
  }
}
console.log(res);
