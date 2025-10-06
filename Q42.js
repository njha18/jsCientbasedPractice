//function to find the intersection of two arrays
let arr1 = [1, 2, 3, 4, 5, 9];
let arr2 = [4, 5, 9];
let res = arr1.filter((item) => arr2.includes(item));
console.log(res);
//use set for large arrays
// let arr1 = [1, 2, 3, 4, 5, 9];
// let arr2 = [4, 5, 9];

// let set1 = new Set(arr1);
// let res = arr2.filter(num => set1.has(num));

// console.log(res); // [4, 5, 9]
