//smallest missing positive integer in an array
let arr = [45, 56, 78, 90];
let num = 1;

while (true) {
  if (!arr.includes(num)) {
    console.log(num);
    break;
  }
  num++;
}
