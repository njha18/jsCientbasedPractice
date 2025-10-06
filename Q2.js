//check if the given string is palindrome
//input "madam","racecar"
//output "madam", "racecar"

function palindrome(input) {
  let res = "";
  for (let i = input.length - 1; i >= 0; i--) {
    res += input[i];
  }
  return res === input;
}
console.log(palindrome("race"));
