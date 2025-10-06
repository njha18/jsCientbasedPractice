//basic version of the reduce method

let arr = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  if (arguments.length > 1) {
    acc = initialValue;
    startIndex = 0;
  } else {
    acc = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

let res = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(res);
