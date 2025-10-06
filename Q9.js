//check if string contains only digits
//"12345"."ab23m"
function isDigit(str) {
  for (let i of str) {
    if (!(i >= "0" && i <= "9")) {
      return false;
    }
  }
  return true;
}
console.log(isDigit("34567a"));
