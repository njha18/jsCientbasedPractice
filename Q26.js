//string has balanced parenthesis.

function isbalanced(str) {
  let res = [];
  for (let ch of str) {
    if (ch === "[" || ch === "(" || ch === "{") {
      res.push(ch);
    } else {
      let last = res.pop();
      if (ch === "]" && last !== "[") {
        return false;
      } else if (ch === "}" && last !== "{") {
        return false;
      } else if (ch === ")" && last !== "(") {
        return false;
      }
    }
  }
  return true;
}
console.log(isbalanced("({([})})"));
