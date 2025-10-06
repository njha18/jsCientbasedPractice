//merge two sorted array into one sorted array
let arr1 = [1, 2, 3, 4, 6, 7, 8];
let arr2 = [5, 9, 11, 12, 13, 14];
let res = [];
let j = 0;
let i = 0;
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    res.push(arr1[i]);
    i++;
  } else {
    res.push(arr2[j]);
    j++;
  }
}
while (i < arr1.length) {
  res.push(arr1[i]);
  i++;
}
while (j < arr2.length) {
  res.push(arr2[j]);
  j++;
}
console.log(res);
