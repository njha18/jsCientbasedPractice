//find the majority element in an array except the current index without using division
let arr = [1, 2, 2, 3, 2];
function findMajority(arr) {
  //result store the answer for each index
  let result = [];
  //i represents the index we are skipping
  for (let i = 0; i < arr.length; i++) {
    // counts is an object where we count how many times each number appears (like a basket).
    // maxCount keeps track of the highest frequency we've seen.
    // majority will hold the number that appears the most.
    let count = {};
    let maxCount = 0;
    let majority = null;
    //loop through the array again and skip i
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      let num = arr[j];
      count[num] = (count[num] || 0) + 1;
      if (count[num] > maxCount) {
        maxCount = count[num];
        majority = num;
      }
    }
    if (maxCount * 2 > arr.length - 1) {
      result.push(majority);
    } else {
      result.push(null);
    }
  }
  return result;
}
console.log(findMajority(arr));
// An element is a majority if it appears more than half of the time in the array excluding the current index.

// So in [2, null, null, 2, null]:

// 2 is majority at index 0 and 3.

// No element meets the majority condition at other indices.

// An element appears more than half of the remaining elements.

// So, for a majority to exist:

// maxCount > (arr.length - 1) / 2

// But since we don't want to use division, we multiply both sides by 2:

// maxCount * 2 > arr.length - 1

// ✅ This is what the code uses:

// if (maxCount * 2 > arr.length - 1)  if division is allowed-if (maxCount > (arr.length - 1) / 2)
