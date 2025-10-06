//repeat a given string n times without using .repeat()
//str=hello n=3 hellohellohello str=h hhh

function repeatString(str, n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += str;
  }
  return res;
}
console.log(repeatString("h", 3));
