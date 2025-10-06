//find the most frequent character in a string
// Consider the string:
// "banana"
// Count the frequency of each character:
// 'b' appears 1 time
// 'a' appears 3 times
// 'n' appears 2 times
// Which character appears the most?
// 'a' with 3 occurrences.
function frequency(str) {
  let max = 0;

  let ch = "";
  let arr = str.split("");
  let result = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  console.log(result);
  for (let i in result) {
    if (result[i] > max) {
      max = result[i];
      ch = i;
    }
  }
  return ch;
}
console.log(frequency("bananannnnnnnnnn"));
