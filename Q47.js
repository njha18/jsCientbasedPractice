//remove falsy values from an array(eg 0,null,undefined,false)
let arr = [0, undefined, null, "", [], 3, 7, 9, false, NaN];
let res = arr.filter((item) => Boolean(item));
console.log(res);
