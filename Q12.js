//remove duplicate character from the string
//str="neeeeeehayyyyyooo"
let str = "neeeeeehayyyyyooo";
let newStr = [...new Set(str)].join("");
console.log(newStr);
