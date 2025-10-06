//check if the given key exist in the object
const obj = { name: "Neha", age: 25 };
function checkKey(obj, key) {
  return obj.hasOwnProperty(key);
}
console.log(checkKey(obj, "name")); // true
console.log(checkKey(obj, "city")); // false
