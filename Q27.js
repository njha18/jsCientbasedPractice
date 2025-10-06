//write a function to remove a specific character from a string.
//let str=neha a-neh

function removeSpecificChar(str, char) {
  let res = "";
  for (let i of str) {
    if (i !== char) {
      res += i;
    }
  }
  return res;
}
console.log(removeSpecificChar("nehaaaa", ""));
//Make sure you pass the character you want to remove as the second argument.

// "" (empty string) means no character, so nothing will be removed.
