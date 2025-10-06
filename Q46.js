//basic version of map and filter method

let arr1 = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i]));
  }
  return output;
};
let result = arr1.myMap((item) => item * 2);
console.log(result);
//filter method
let arr = [1, 2, 3, 4, 5, 6];
Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output.push(this[i]);
    }
  }
  return output;
};

let res = arr.myFilter((item) => item > 3);
console.log(res);
