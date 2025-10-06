//decode a given run length encoded string a3b2c1 -aaabbc
function decodeString(str) {
  let res = "";
  let i = 0;
  let count = 1;
  while (i < str.length) {
    let char = str[i];
    i++;
    let numstr = "";
    while (i < str.length && str[i] >= "0" && str[i] <= "9") {
      numstr += str[i];
      i++;
    }
    if (numstr === "") count = 1;
    else {
      count = parseInt(numstr); //convert it into num
    }
    for (let j = 0; j < count; j++) {
      res += char;
    }
  }
  return res;
}
console.log(decodeString("a13b2c1d"));
//if two continuous digit add it in numstr and from numbstr vakue store it in count.
