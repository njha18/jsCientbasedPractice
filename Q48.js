//function to find the frequency of elements in an array
let arr = [1, 2, 3, 1, 2, 4, 4, 4, 4, 4, 4, 44, 4];
let res = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(res);
