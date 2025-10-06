//count the no. of vowels in the string
// vowels-a.e.i.o.u

let vowels = ["a", "e", "i", "o", "u"];
let str = "javascripte";
let count = 0;
for (let i of str) {
  if (vowels.includes(i)) {
    count++;
  }
}
console.log(count);
