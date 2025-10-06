//implement a function to find all substring of a string
// Substring: continuous sequence of characters in the string.

// Subsequence: characters taken in order but not necessarily contiguous.
function allSubstring(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j <= str.length; j++) {
      res.push(str.slice(i, j));
    }
  }
  return res;
}
console.log(allSubstring("abc"));
//valid substring condition j>i
// j=i or <i lead to invalid string
// A substring is a continuous sequence of characters in the string.

// In "abc":

// ✅ "a" is a substring

// ✅ "ab" is a substring

// ✅ "bc" is a substring

// ✅ "abc" is a substring

// ❌ "ac" is not — because the characters aren’t next to each other
