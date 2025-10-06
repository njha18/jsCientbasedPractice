//count the number of occurences of a substring in a string
//  String:     "hellohellohellohellohello"
// Substring:  "hello" output-3

let str = "hello123hellohellohellohello";
function occurences(str, substr) {
  let count = 0;
  let n = substr.length;
  for (let i = 0; i < str.length; ) {
    if (str.slice(i, i + n) === substr) {
      count++;
      i = i + n;
    } else {
      i++;
    }
  }
  return count;
}
console.log(occurences(str, "hello"));

// Function to count the number of occurrences of a substring in a string
// Example:
// String:    "hellohellohellohellohello"
// Substring: "hello"
// Output:    5 (not 3 as mentioned in comment, because "hello" appears 5 times)

// let str = "hello123hellohellohellohello";

// function occurences(str, substr) {
//   let count = 0;          // Initialize counter for substring occurrences
//   let n = substr.length;  // Length of the substring to compare

//   // Loop through the main string using index i
//   // No increment in the for loop statement, as i will be updated inside the loop dynamically
//   for (let i = 0; i < str.length; ) {
//     // Extract a slice from the string starting at i with length equal to substring
//     if (str.slice(i, i + n) === substr) {
//       count++;        // If the slice matches substring, increment the count
//       i = i + n;      // Move i forward by length of substring to avoid overlapping counts
//     } else {
//       i++;            // If no match, move i forward by 1 to check next position
//     }
//   }
//   return count;        // Return the total count of occurrences
// }

// console.log(occurences(str, "hello"));  // Output: 4, because "hello" appears 4 times in the given string
