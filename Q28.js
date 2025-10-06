//convert a string to a number without using parseInt() or number()

function convertStringToNumber(str) {
  let digit = 0;
  for (let i = 0; i < str.length; i++) {
    let num = str[i] - 0;
    //num can be zero
    if (num === 0 || num) {
      digit = digit * 10 + num;
    } else {
      console.log("its not a number");
      return; //this will not allow to return digit works for if any string elem is alphabet just log errors.
    }
  }
  return digit;
}
console.log(convertStringToNumber("1234a"));
