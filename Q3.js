//find the length of the string without using .length
//input evil output-4

function stringLength(input) {
  let count = 0;
  for (let i in input) {
    count++;
  }
  return count;
}
console.log(stringLength("evilll"));
