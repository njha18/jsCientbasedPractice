//extract all numbers from a string.
//let str="aa345k9l10"
let str = "aa345k9l10";
let res = "";
for (let i of str) {
  if (i >= "0" && i <= "9") {
    res += i;
  }
}
console.log(res);
