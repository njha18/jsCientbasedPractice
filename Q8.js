//first non repeating character in a string
//input="jaavascripptt"
//output j

let str = "aavascripptt";
let arr = str.split("");
let result = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
for (let i in arr) {
  if (result[arr[i]] === 1) {
    console.log(arr[i]);
    break;
  }
}
