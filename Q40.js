//write a function to flatten a nested array
let arr = [1, 2, [3, 4], [5, [6, 7]], 9, 8];
function flatten(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(flatten(arr));
// Mental Edge Case Checklist:

// 🔁 Empty input (e.g., [], "", null, undefined)

// 🔁 Single element (e.g., [5])

// 🔁 All same elements (e.g., [3,3,3])

// 🔁 Already sorted / reversed

// 🔁 Contains duplicates

// 🔁 Nested structures (e.g., arrays inside arrays)

// 🔁 Unusual values (negative numbers, zero, very large numbers)
