//occurence of each element in an array
let arr = [1, 2, 2, 2, 4, 4, 4, 4, 6];
let result = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(result);
