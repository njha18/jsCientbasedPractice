//capatilize the first letter of each word in a string."i am learning javascript"
//output-"I Am Learning Javascript"

let str = "i am learning javascript";
str = str.split(" ");
let result = str.map((item) => item[0].toUpperCase() + item.slice(1));
console.log(result.join(" "));
